const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');

const url = process.env.PREVIEW_URL || pathToFileURL(path.resolve(__dirname, '../index.html')).href;
const report = {widths: [], interactions: [], errors: []};
const translation = page => page.locator('#delivery-track').evaluate(el => new DOMMatrixReadOnly(getComputedStyle(el).transform).m41);
const waitCard = (page, index) => page.waitForFunction(index => {
  const viewport = document.querySelector('.delivery-viewport').getBoundingClientRect();
  return Math.abs(document.querySelectorAll('.deliverable')[index].getBoundingClientRect().left - viewport.left) < 2;
}, index);

async function assertLayout(page) {
  const state = await page.locator('#entregas').evaluate(section => ({
    height: section.offsetHeight,
    pinned: getComputedStyle(section.firstElementChild).position === 'sticky',
    overflow: [...section.querySelectorAll('h2,h3,p')].filter(el => el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2).map(el => el.textContent),
    pageWidth: document.documentElement.scrollWidth,
  }));
  assert(state.height < 680, 'Delivery section should only occupy its content height');
  assert.equal(state.pinned, false);
  assert.deepEqual(state.overflow, []);
  assert.equal(state.pageWidth, page.viewportSize().width);
  assert.equal(await page.locator('.delivery-navigation,.delivery-progress,.delivery-position,.delivery-arrows').count(), 0);
  assert.equal(await page.locator('.deliverable').count(), 6);
  return state.height;
}

(async () => {
  const browser = await chromium.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  try {
    const page = await browser.newPage();
    page.on('pageerror', error => report.errors.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400 && !response.url().includes('/cdn-cgi/rum')) report.errors.push(`${response.status()} ${response.url()}`);
    });
    for (const width of [320, 390, 768, 820, 1024, 1440, 1920]) {
      await page.setViewportSize({width, height: 900});
      await page.emulateMedia({reducedMotion: 'reduce'});
      await page.goto(url, {waitUntil: 'networkidle'});
      await page.evaluate(() => document.fonts.ready);
      await page.locator('#delivery-viewport').focus();
      const height = await assertLayout(page);
      await page.keyboard.press('End');
      await waitCard(page, 5);
      await page.keyboard.press('ArrowRight');
      await waitCard(page, 0);
      await page.keyboard.press('ArrowLeft');
      await waitCard(page, 5);
      await page.keyboard.press('Home');
      await waitCard(page, 0);
      await page.locator('#delivery-viewport').evaluate(el => el.blur());
      if ([390, 1440].includes(width)) await page.locator('#entregas').screenshot({path: path.join(__dirname, `infinite-carousel-${width}.png`)});
      report.widths.push({width, height});
      console.log(`PASS compact infinite carousel ${width}`);
    }
    report.interactions.push('Six slides, no navigation bar, infinite wrapping in both directions and reduced motion');

    await page.emulateMedia({reducedMotion: 'no-preference'});
    await page.mouse.move(0, 0);
    await page.waitForFunction(() => document.querySelector('#entregas').dataset.motion === 'running');
    const start = await translation(page);
    await page.waitForTimeout(600);
    assert(Math.abs(await translation(page) - start) > 10, 'Continuous motion is not advancing');
    await page.locator('#delivery-viewport').hover();
    await page.waitForTimeout(300);
    const paused = await translation(page);
    await page.waitForTimeout(300);
    assert(Math.abs(await translation(page) - paused) < 2, 'Hover should pause for reading');
    await page.mouse.move(0, 0);
    await page.waitForTimeout(400);
    assert(Math.abs(await translation(page) - paused) > 5, 'Motion should resume after hover');
    await page.locator('.delivery-motion-toggle').focus();
    await page.keyboard.press('Enter');
    await page.locator('.delivery-motion-toggle').evaluate(el => el.blur());
    assert.equal(await page.locator('#entregas').getAttribute('data-motion'), 'paused');
    await page.locator('.delivery-motion-toggle').focus();
    await page.keyboard.press('Enter');
    await page.locator('.delivery-motion-toggle').evaluate(el => el.blur());
    await page.waitForFunction(() => document.querySelector('#entregas').dataset.motion === 'running');
    report.interactions.push('Automatic movement, hover pause/resume and persistent keyboard pause');

    // Run a complete automatic cycle and check that the track wraps without empty space.
    await page.clock.install();
    let last = await translation(page);
    let wrapped = false;
    for (let second = 0; second < 75; second++) {
      await page.clock.runFor(1000);
      const current = await translation(page);
      if (current > last + 1000) wrapped = true;
      last = current;
      const coverage = await page.locator('#delivery-viewport').evaluate(viewport => {
        const bounds = viewport.getBoundingClientRect();
        const cards = [...viewport.querySelectorAll('.deliverable')].map(el => el.getBoundingClientRect());
        return Array.from({length: 10}, (_, index) => bounds.left + 10 + (bounds.width - 20) * index / 9)
          .every(x => cards.some(card => x >= card.left - 20 && x <= card.right + 20));
      });
      assert(coverage, 'Empty space during infinite cycle');
    }
    assert(wrapped, 'Automatic cycle never wrapped');
    report.interactions.push('Full automatic cycle wraps without blank frames');

    const touch = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true, reducedMotion: 'reduce'});
    const mobile = await touch.newPage();
    await mobile.goto(url, {waitUntil: 'networkidle'});
    await mobile.locator('#entregas').scrollIntoViewIfNeeded();
    const bounds = await mobile.locator('#delivery-viewport').boundingBox();
    const session = await touch.newCDPSession(mobile);
    const y = Math.round(bounds.y + bounds.height / 2);
    const beforeDrag = await translation(mobile);
    await session.send('Input.dispatchTouchEvent', {type: 'touchStart', touchPoints: [{x: 300, y}]});
    for (let x = 280; x >= 80; x -= 20) await session.send('Input.dispatchTouchEvent', {type: 'touchMove', touchPoints: [{x, y}]});
    await session.send('Input.dispatchTouchEvent', {type: 'touchEnd', touchPoints: []});
    assert(Math.abs(await translation(mobile) - beforeDrag) > 80);
    await assertLayout(mobile);
    report.interactions.push('Native touch drag on mobile');
    await touch.close();

    const noScripts = await browser.newContext({javaScriptEnabled: false, viewport: {width: 390, height: 844}});
    const fallback = await noScripts.newPage();
    await fallback.goto(url);
    assert.equal(await fallback.locator('.deliverable').count(), 6);
    assert.equal(await fallback.locator('.delivery-motion-toggle').isVisible(), false);
    assert(await fallback.locator('#delivery-viewport').evaluate(el => el.scrollWidth > el.clientWidth && getComputedStyle(el).overflowX === 'auto'));
    report.interactions.push('Native horizontal fallback without JavaScript');
    await noScripts.close();
    assert.deepEqual(report.errors, []);
    report.result = 'passed';
    await fs.writeFile(path.join(__dirname, 'carousel-validation.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
