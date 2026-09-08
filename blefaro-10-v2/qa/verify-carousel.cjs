const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');

const url = process.env.PREVIEW_URL || pathToFileURL(path.resolve(__dirname, '../index.html')).href;
const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const report = {widths: [], interactions: [], errors: []};

async function geometry(page) {
  return page.locator('.deliveries-carousel').evaluate(section => {
    const track = section.querySelector('#delivery-track');
    return {
      start: section.getBoundingClientRect().top + scrollY - parseFloat(section.style.getPropertyValue('--delivery-sticky-top')),
      distance: parseFloat(section.style.getPropertyValue('--delivery-section-height')) - section.firstElementChild.offsetHeight,
      max: track.scrollWidth - track.clientWidth,
      driven: section.classList.contains('is-scroll-driven'),
      height: section.offsetHeight,
      panelHeight: section.firstElementChild.offsetHeight,
    };
  });
}

async function scrollPage(page, top) {
  await page.evaluate(top => window.scrollTo({top, behavior: 'instant'}), top);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

async function assertLeft(page, expected) {
  await page.waitForFunction(expected => Math.abs(document.querySelector('#delivery-track').scrollLeft - expected) < 3, expected);
}

async function assertText(page) {
  const overflow = await page.locator('.deliveries-carousel').evaluate(section => [...section.querySelectorAll('h2,h3,p')].filter(el => {
    if (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2) return true;
    const card = el.closest('.deliverable');
    if (!card) return false;
    const rect = el.getBoundingClientRect();
    const bounds = card.getBoundingClientRect();
    return rect.left < bounds.left || rect.right > bounds.right + 1 || rect.bottom > bounds.bottom + 1;
  }).map(el => el.textContent.trim()));
  assert.deepEqual(overflow, []);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), page.viewportSize().width);
}

(async () => {
  const browser = await chromium.launch({executablePath});
  try {
    const page = await browser.newPage();
    page.on('pageerror', error => report.errors.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400 && !response.url().includes('/cdn-cgi/rum')) report.errors.push(`${response.status()} ${response.url()}`);
    });
    for (const width of [320, 390, 768, 820, 1024, 1440, 1920]) {
      await page.setViewportSize({width, height: width <= 800 ? 844 : 900});
      await page.goto(url, {waitUntil: 'networkidle'});
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(() => document.querySelector('.deliveries-carousel').classList.contains('is-carousel'));
      const metrics = await geometry(page);
      assert(metrics.driven, `Scroll-driven carousel disabled at ${width}`);
      assert(metrics.panelHeight < 740, `Oversized panel at ${width}`);
      assert(metrics.height < 2200, `Oversized section at ${width}`);
      assert.equal(await page.locator('.deliverable').count(), 6);
      await assertText(page);

      await scrollPage(page, metrics.start);
      await assertLeft(page, 0);
      assert(await page.locator('[data-delivery-prev]').isDisabled());
      for (const [label, fraction] of [['first', 0], ['middle', 0.5], ['last', 1]]) {
        await scrollPage(page, metrics.start + metrics.distance * fraction);
        await assertLeft(page, metrics.max * fraction);
        await assertText(page);
        if ([390, 1440].includes(width)) await page.locator('.delivery-sticky').screenshot({path: path.join(__dirname, `carousel-${label}-${width}.png`)});
      }
      assert(await page.locator('[data-delivery-next]').isDisabled());
      assert.match(await page.locator('.delivery-position').innerText(), /06 \/ 06$/);
      await scrollPage(page, metrics.start + metrics.distance + 220);
      assert(await page.locator('.delivery-sticky').evaluate(el => el.getBoundingClientRect().top < 0), 'Section does not release after last slide');
      await scrollPage(page, metrics.start + metrics.distance * 0.25);
      await assertLeft(page, metrics.max * 0.25);

      await scrollPage(page, metrics.start);
      await assertLeft(page, 0);
      await page.locator('[data-delivery-next]').click();
      await page.waitForFunction(() => document.querySelector('#delivery-track').scrollLeft > 100);
      await page.locator('#delivery-track').focus();
      await page.keyboard.press('End');
      await assertLeft(page, metrics.max);
      await page.keyboard.press('Home');
      await assertLeft(page, 0);
      await scrollPage(page, metrics.start);
      await page.mouse.move(width / 2, 400);
      await page.mouse.wheel(0, 180);
      await page.waitForFunction(() => document.querySelector('#delivery-track').scrollLeft > 100);
      report.widths.push({width, panelHeight: metrics.panelHeight, sectionHeight: metrics.height});
      console.log(`PASS viewport ${width}`);
    }
    report.interactions.push('vertical scroll, reverse scroll, release, arrows, Home/End and wheel');

    await page.emulateMedia({reducedMotion: 'reduce'});
    await page.waitForFunction(() => !document.querySelector('.deliveries-carousel').classList.contains('is-scroll-driven'));
    await page.locator('#delivery-track').focus();
    await page.keyboard.press('Home');
    await assertLeft(page, 0);
    await page.keyboard.press('ArrowRight');
    assert(await page.locator('#delivery-track').evaluate(el => el.scrollLeft > 100));
    await page.keyboard.press('End');
    await assertLeft(page, (await geometry(page)).max);
    assert((await geometry(page)).height < 740);
    report.interactions.push('reduced motion uses a compact manual carousel');

    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.setViewportSize({width: 844, height: 390});
    await page.waitForFunction(() => !document.querySelector('.deliveries-carousel').classList.contains('is-scroll-driven'));
    await assertText(page);
    report.interactions.push('short landscape viewport remains unpinned');

    const touch = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
    const mobile = await touch.newPage();
    mobile.on('pageerror', error => report.errors.push(error.message));
    await mobile.goto(url, {waitUntil: 'networkidle'});
    await mobile.evaluate(() => document.fonts.ready);
    const metrics = await geometry(mobile);
    await scrollPage(mobile, metrics.start);
    await assertLeft(mobile, 0);
    const bounds = await mobile.locator('#delivery-track').boundingBox();
    const session = await touch.newCDPSession(mobile);
    const y = Math.round(bounds.y + bounds.height / 2);
    await session.send('Input.dispatchTouchEvent', {type: 'touchStart', touchPoints: [{x: 300, y}]});
    for (let x = 280; x >= 80; x -= 20) await session.send('Input.dispatchTouchEvent', {type: 'touchMove', touchPoints: [{x, y}]});
    await session.send('Input.dispatchTouchEvent', {type: 'touchEnd', touchPoints: []});
    await mobile.waitForFunction(() => document.querySelector('#delivery-track').scrollLeft > 80);
    await assertText(mobile);
    report.interactions.push('native horizontal touch gesture');
    await touch.close();

    const noScripts = await browser.newContext({javaScriptEnabled: false, viewport: {width: 390, height: 844}});
    const fallback = await noScripts.newPage();
    await fallback.goto(url);
    assert.equal(await fallback.locator('.deliverable').count(), 6);
    assert.equal(await fallback.locator('.delivery-navigation').isVisible(), false);
    assert.equal(await fallback.locator('.delivery-sticky').evaluate(el => getComputedStyle(el).position), 'static');
    assert(await fallback.locator('#delivery-track').evaluate(el => el.scrollWidth > el.clientWidth && getComputedStyle(el).overflowX === 'auto'));
    report.interactions.push('all six cards remain scrollable without JavaScript');
    await noScripts.close();

    assert.deepEqual(report.errors, []);
    report.result = 'passed';
    await fs.writeFile(path.join(__dirname, 'carousel-validation.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
