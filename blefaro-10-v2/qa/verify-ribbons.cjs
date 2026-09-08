const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const url = process.env.PREVIEW_URL || pathToFileURL(path.resolve(__dirname, '../index.html')).href;

(async () => {
  const browser = await chromium.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const errors = [];
  try {
    const page = await browser.newPage({reducedMotion: 'reduce'});
    page.on('pageerror', error => errors.push(error.message));
    for (const width of [320, 390, 480, 768, 820, 1024, 1440, 1920, 2560]) {
      await page.setViewportSize({width, height: 900});
      await page.goto(url, {waitUntil: 'networkidle'});
      await page.evaluate(() => document.fonts.ready);
      const state = await page.locator('.scope-strip').evaluate(strip => {
        const rect = strip.getBoundingClientRect();
        const ribbons = [...strip.querySelectorAll('.ticker-ribbon')];
        return {
          pageWidth: document.documentElement.scrollWidth,
          height: rect.height,
          formGap: rect.top - document.querySelector('#avaliacao').getBoundingClientRect().bottom,
          caseGap: document.querySelector('#case-title').getBoundingClientRect().top - rect.bottom,
          position: strip.parentElement.classList.contains('hero') && strip.parentElement.nextElementSibling.id === 'caso',
          ribbons: ribbons.map(ribbon => ({
            angle: new DOMMatrixReadOnly(getComputedStyle(ribbon).transform).b,
            covered: ribbon.getBoundingClientRect().left <= 0 && ribbon.getBoundingClientRect().right >= innerWidth,
            copiesMatch: ribbon.querySelectorAll('.ticker-group')[0].textContent === ribbon.querySelectorAll('.ticker-group')[1].textContent,
            readable: [...ribbon.querySelectorAll('span')].every(span => parseFloat(getComputedStyle(span).lineHeight) < ribbon.clientHeight),
            animation: getComputedStyle(ribbon.firstElementChild).animationName,
            shadow: getComputedStyle(ribbon).boxShadow,
            groupWidth: ribbon.querySelector('.ticker-group').offsetWidth,
            clipWidth: ribbon.clientWidth,
          })),
        };
      });
      assert.equal(state.pageWidth, width);
      assert(state.position);
      assert(state.height < Math.max(180, width * 0.15 + 90));
      assert(state.formGap >= 24);
      assert(state.caseGap >= 28);
      assert.equal(state.ribbons.length, 2);
      assert(state.ribbons[0].angle > 0 && state.ribbons[1].angle < 0);
      assert(state.ribbons.every(ribbon => ribbon.covered && ribbon.copiesMatch && ribbon.readable && ribbon.animation === 'none' && ribbon.shadow !== 'none' && ribbon.groupWidth >= ribbon.clipWidth));
      if ([390, 1440].includes(width)) {
        await page.locator('.scope-strip').evaluate(el => scrollTo({top: el.getBoundingClientRect().top + scrollY - 200, behavior: 'instant'}));
        await page.screenshot({path: path.join(__dirname, `crossed-ribbons-${width}.png`)});
      }
      console.log(`PASS crossed ribbons ${width}`);
    }
    await page.setViewportSize({width: 1440, height: 900});
    await page.locator('.scope-strip').scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);
    await page.emulateMedia({reducedMotion: 'no-preference'});
    const positions = () => page.locator('.ticker-track').evaluateAll(tracks => tracks.map(track => new DOMMatrixReadOnly(getComputedStyle(track).transform).m41));
    await page.waitForTimeout(100);
    const start = await positions();
    await page.waitForTimeout(500);
    const end = await positions();
    assert(end[0] > start[0] + 8 && end[1] < start[1] - 8, 'Ribbons should move in opposite directions');
    await page.locator('.scope-strip').hover();
    const paused = await positions();
    await page.waitForTimeout(250);
    const still = await positions();
    assert(still.every((value, index) => Math.abs(value - paused[index]) < 2), 'Hover should pause both ribbons');
    assert.deepEqual(errors, []);
    console.log('PASS movement, hover pause and reduced motion');
  } finally {
    await browser.close();
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
