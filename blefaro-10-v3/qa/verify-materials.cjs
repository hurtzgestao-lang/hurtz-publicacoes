const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const report = { widths: [], errors: [] };
  try {
    const page = await browser.newPage();
    page.on('pageerror', e => report.errors.push(e.message));
    for (const width of [320,390,768,1001,1440]) {
      await page.setViewportSize({width,height:1000});
      await page.goto(process.env.PREVIEW_URL || pathToFileURL(path.join(__dirname,'../index.html')).href, {waitUntil:'networkidle'});
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator('img[loading="lazy"]').all()) await img.scrollIntoViewIfNeeded();
      await page.evaluate(() => Promise.all([...document.images].map(i=>i.decode())));
      assert.equal(await page.locator('.client-case').count(),3);
      const luma = await page.locator('.client-case').filter({has:page.locator('#case-luma')}).innerText();
      assert.match(luma,/6\s+blefaroplastias vendidas no primeiro mês com a Hurtz/);
      assert.doesNotMatch(luma,/oftalmo|32|Maio/);
      const sarah = page.locator('.client-case').filter({has:page.locator('#case-sarah')});
      assert.equal(await sarah.locator('.case-result').count(),1);
      assert.match(await sarah.locator('img').getAttribute('src'),/sarah.*webp/);
      assert.equal(await page.locator('.deliverable').count(),6);
      for (const id of ['03','04','05','06','07','08']) assert.equal(await page.locator(`[data-material="${id}"]`).count(),1);
      for (const id of ['06','08']) {
        assert.equal(await page.locator(`[data-material="${id}"] img`).count(),1);
        assert.ok((await page.locator(`[data-material="${id}"] img`).getAttribute("alt")).length>40);
      }
      assert.equal(await page.locator(".delivery-visual figcaption").count(),0);
      const layout=await page.evaluate(()=>({
        width:innerWidth,pageWidth:document.documentElement.scrollWidth,
        columns:getComputedStyle(document.querySelector('.deliverables-grid')).gridTemplateColumns.split(' ').length,
        brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
        overflow:[...document.querySelectorAll('.client-case *, .delivery-visual *')].filter(e=>!(e instanceof SVGElement && e.tagName !== 'svg') && e.getClientRects().length && (e.scrollWidth>e.clientWidth+2 || e.getBoundingClientRect().right>innerWidth+1)).map(e=>e.tagName+': '+e.textContent.slice(0,50)),
        minNativeText:Math.min(...[...document.querySelectorAll('.deliverable-copy p')].map(e=>parseFloat(getComputedStyle(e).fontSize)))
      }));
      assert.equal(layout.pageWidth,width);
      assert.equal(layout.columns,1);
      assert.deepEqual(layout.brokenImages,[]);
      assert.deepEqual(layout.overflow,[]);
      assert.ok(layout.minNativeText>=14);
      report.widths.push(layout);
      if ([390,1440].includes(width)) {
        const prefix=width===390?'mobile':'desktop';
        for (const selector of ['.case','.deliverables']) await page.locator(selector).screenshot({path:path.join(__dirname,`${prefix}-${selector.slice(1)}-integral.png`)});
        if (width===390) for (const id of ['05','07']) await page.locator(`[data-material="${id}"]`).screenshot({path:path.join(__dirname,`mobile-material-${id}.png`)});
      }
    }
    assert.deepEqual(report.errors,[]);
    report.result='passed';
    await fs.writeFile(path.join(__dirname,'materials-validation.json'),JSON.stringify(report,null,2)+'\n');
    console.log('PASS: three distinct cases, correct Luma claim, six materials, native readable text, image loading, responsive grid and no overflow.');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
