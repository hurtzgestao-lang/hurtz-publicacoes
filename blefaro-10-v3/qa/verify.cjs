const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const baseUrl = process.env.PREVIEW_URL || pathToFileURL(path.join(__dirname, "../index.html")).href;
const promise =
  "Sua meta: 10 blefaroplastias a mais por mês.";

async function checkLayout(page) {
  return page.evaluate(() => {
    const overflow = [];
    for (const el of document.querySelectorAll(
      "h1,h2,h3,p,li,summary,.button,label,.ticker-group:first-child span",
    )) {
      if (!el.getClientRects().length) continue;
      const rect = el.getBoundingClientRect();
      if (
        rect.left < -1 ||
        rect.right > innerWidth + 1 ||
        el.scrollWidth > el.clientWidth + 2
      ) {
        overflow.push(el.textContent.trim().slice(0, 90));
      }
    }
    return {
      viewport: innerWidth,
      pageWidth: document.documentElement.scrollWidth,
      pageHeight: document.documentElement.scrollHeight,
      overflow,
      promise: document
        .querySelector("h1")
        .textContent.replace(/\s+/g, " ")
        .trim(),
      titleLines:
        document.querySelector("h1").getBoundingClientRect().height /
        parseFloat(getComputedStyle(document.querySelector("h1")).lineHeight),
      firstCtaBottom:
        document.querySelector(".hero-copy .button").getBoundingClientRect()
          .bottom + scrollY,
      assets: [...document.images].map((img) => ({
        source: img.getAttribute("src"),
        loaded: img.complete && img.naturalWidth > 0,
      })),
      unresolvedIcons: document.querySelectorAll("i[data-lucide]").length,
    };
  });
}

async function checkBackgrounds(page) {
  return page.evaluate(async () => {
    const results = [];
    for (const selector of [".hero", ".method", ".faq", ".final-cta"]) {
      const background = getComputedStyle(
        document.querySelector(selector),
      ).backgroundImage;
      const source = background.match(/^url\(["']?(.*?)["']?\)$/)?.[1];
      const image = new Image();
      if (source) {
        image.src = source;
        await image.decode();
      }
      results.push({
        selector,
        source,
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    }
    return results;
  });
}

(async () => {
  const browser = await chromium.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const report = {
    viewports: [],
    interactions: {},
    consoleErrors: [],
    failedRequests: [],
  };
  try {
    const page = await browser.newPage({ reducedMotion: "reduce" });
    page.on("pageerror", (error) => report.consoleErrors.push(error.message));
    page.on("requestfailed", (req) => {
      // Cloudflare analytics may be blocked; exclude only that external telemetry endpoint.
      if (new URL(req.url()).pathname !== "/cdn-cgi/rum") report.failedRequests.push(req.url());
    });
    page.on("response", (res) => {
      if (res.status() >= 400 && new URL(res.url()).pathname !== "/cdn-cgi/rum")
        report.failedRequests.push(`${res.status()} ${res.url()}`);
    });
    // Prevent live navigation, capture requests and side effects during verification.
    await page.addInitScript(() => {
      window.__opened = [];
      window.open = (...args) => {
        window.__opened.push(args);
        return null;
      };
    });
    for (const width of [320, 390, 768, 820, 900, 1001, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: width < 800 ? 844 : 1000 });
      await page.goto(baseUrl, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator('img[loading="lazy"]').all())
        await img.scrollIntoViewIfNeeded();
      await page.evaluate(() =>
        Promise.all([...document.images].map((img) => img.decode())),
      );
      await page.evaluate(() => window.scrollTo(0, 0));
      const layout = await checkLayout(page);
      assert.equal(layout.pageWidth, width, `Page overflow at ${width}`);
      assert.deepEqual(layout.overflow, [], `Text overflow at ${width}`);
      assert.equal(layout.promise, promise);
      assert.equal(layout.unresolvedIcons, 0);
      assert.equal(await page.locator(".hero-copy .hero-brand img").count(), 1);
      assert.equal(
        await page
          .locator(
            ".hero .header, .product-label, .audience, .hero-microcopy, .form-progress, [data-step]",
          )
          .count(),
        0,
      );
      assert.equal(
        await page.locator("#lead-form input, #lead-form select").count(),
        6,
      );
      assert.equal(
        await page
          .locator("#lead-form input:visible, #lead-form select:visible")
          .count(),
        6,
      );
      assert.equal(await page.locator("h1").count(), 1);
      const authority = await page.locator(".about-copy").evaluate((el) => {
        const title = el.querySelector(".authority-title");
        const name = el.querySelector(".founder-name");
        return {
          titleLines: title.getBoundingClientRect().height / parseFloat(getComputedStyle(title).lineHeight),
          gap: name.getBoundingClientRect().top - title.getBoundingClientRect().bottom,
        };
      });
      assert(Math.abs(authority.titleLines - 1) < 0.1, `Authority heading wraps at ${width}`);
      assert(authority.gap >= 0 && authority.gap <= 16, `Authority heading gap at ${width}`);
      assert(layout.assets.every((asset) => asset.loaded));
      layout.backgrounds = await checkBackgrounds(page);
      assert(
        layout.backgrounds.every(
          (image) => image.width > 0 && image.height > 0,
        ),
      );
      assert(
        layout.backgrounds[0].source.endsWith(
          width <= 800 ? "fundo-hurtz-mobile.png" : "fundo-hurtz-hero.png",
        ),
      );
      assert(layout.backgrounds[1].source.endsWith("fundo-hurtz-escuro.png"));
      assert(layout.backgrounds[2].source.endsWith("fundo-hurtz-escuro.png"));
      assert(layout.backgrounds[3].source.endsWith("fundo-hurtz-final.png"));
      assert(layout.titleLines <= 4.1, `Hero exceeds four lines at ${width}`);
      if (width < 800)
        assert(layout.firstCtaBottom < 844, `CTA below viewport at ${width}`);
      report.viewports.push(layout);
      if ([390, 1440].includes(width)) {
        const device = width === 390 ? "mobile" : "desktop";
        await page.screenshot({
          path: path.join(__dirname, `${device}.png`),
          fullPage: true,
        });
        await page.screenshot({
          path: path.join(__dirname, `${device}-hero.png`),
        });
        for (const section of [
          "case",
          "about",
          "method",
          "faq",
          "final-cta",
        ]) {
          await page.locator(`.${section}`).screenshot({
            path: path.join(__dirname, `${device}-${section}.png`),
          });
        }
      }
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.locator(".hero-copy .button").click();
    assert.equal(
      await page
        .locator("#name")
        .evaluate((el) => el === document.activeElement),
      true,
    );
    const submit = page.getByRole("button", {
      name: "Solicitar sessão gratuita",
      exact: true,
    });
    await submit.click();
    assert.equal(await page.locator('[aria-invalid="true"]').count(), 6);
    await page.locator("#name").fill("Teste de interface");
    await page.locator("#email").fill("email-invalido");
    await page.locator("#phone").fill("123");
    await page.locator("#clinic").fill("Clínica de teste local");
    await submit.click();
    assert.equal(
      await page.locator("#phone-error").textContent(),
      "Informe o número com DDD.",
    );
    assert.equal(
      await page.locator("#email-error").textContent(),
      "Informe um e-mail válido.",
    );
    assert.equal(await page.evaluate(() => window.__opened.length), 0);
    await page.locator("#email").fill("teste@example.com");
    await page.locator("#phone").fill("(11) 99999-9999");
    await submit.click();
    assert.equal(await page.locator('[aria-invalid="true"]').count(), 2);
    assert.equal(await page.evaluate(() => window.__opened.length), 0);
    await page
      .locator("#owner")
      .selectOption({ label: "Sim, sou dono ou sócio" });
    await page
      .locator("#revenue")
      .selectOption({ label: "Acima de R$ 50 mil a R$ 100 mil" });
    assert.equal(
      await page.locator("#name").inputValue(),
      "Teste de interface",
    );
    assert.equal(await page.locator("#phone").inputValue(), "(11) 99999-9999");
    assert.equal(
      await page.locator("#revenue").inputValue(),
      "Acima de R$ 50 mil a R$ 100 mil",
    );
    await submit.click();
    assert.equal(await page.locator('[aria-invalid="true"]').count(), 0);
    const opened = await page.evaluate(() => window.__opened);
    assert.equal(opened.length, 1);
    const handoff = new URL(opened[0][0]);
    assert.equal(handoff.hostname, "wa.me");
    assert.equal(handoff.pathname, "/5594988082290");
    for (const text of [
      "Teste de interface",
      "Clínica de teste local",
      "teste@example.com",
      "Sim, sou dono ou sócio",
      "Acima de R$ 50 mil a R$ 100 mil",
    ])
      assert(handoff.searchParams.get("text").includes(text));
    assert(
      handoff.searchParams.get("text").includes("agendar uma sessão estratégica gratuita"),
    );
    assert(!handoff.searchParams.get("text").includes("Cidade e UF:"));
    assert(!handoff.searchParams.get("text").includes("Investimento de R$"));
    assert.equal(opened[0][2], "noopener,noreferrer");
    assert.equal(await page.locator("#whatsapp-resume").isVisible(), true);
    assert.equal(
      await page.locator("#whatsapp-resume").getAttribute("href"),
      handoff.href,
    );
    assert(
      !(await page.locator("#form-status").textContent()).includes("Recebemos"),
    );
    await page
      .locator("#avaliacao")
      .screenshot({ path: path.join(__dirname, "mobile-form-filled.png") });
    await page.setViewportSize({ width: 320, height: 844 });
    assert.deepEqual((await checkLayout(page)).overflow, []);
    await page.locator("#avaliacao").screenshot({
      path: path.join(__dirname, "small-mobile-form-filled.png"),
    });
    await page
      .locator("#owner")
      .selectOption({ label: "Não sou dono de clínica" });
    assert.equal(await page.locator("#whatsapp-resume").isVisible(), false);
    await submit.click();
    const nonOwner = await page.evaluate(() => window.__opened.at(-1)[0]);
    assert(
      new URL(nonOwner).searchParams
        .get("text")
        .includes("Não sou dono de clínica"),
    );
    report.interactions.form =
      "passed: six visible fields, required validation, email, phone, both ownership answers, encoded WhatsApp handoff and blocked-popup fallback; no real messages sent";

    await page.setViewportSize({ width: 390, height: 844 });
    assert.equal(await page.locator("details[open]").count(), 0);
    await page.locator("summary").first().focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("details[open]").count(), 1);
    await page.keyboard.press("Space");
    assert.equal(await page.locator("details[open]").count(), 0);
    for (const summary of await page.locator("summary").all())
      await summary.click();
    assert.equal(await page.locator("details[open]").count(), 7);
    assert.deepEqual((await checkLayout(page)).overflow, []);
    report.interactions.faq = "passed: all seven questions, mouse and keyboard";

    await page.locator(".privacy-note [data-privacy]").click();
    assert.equal(await page.locator("dialog").evaluate((el) => el.open), true);
    await page.keyboard.press("Escape");
    assert.equal(await page.locator("dialog").evaluate((el) => el.open), false);
    assert.equal(
      await page
        .locator(".privacy-note [data-privacy]")
        .evaluate((el) => el === document.activeElement),
      true,
    );
    await page.locator(".footer [data-privacy]").click();
    await page
      .getByRole("button", { name: "Fechar aviso", exact: true })
      .click();
    assert.equal(await page.locator("dialog").evaluate((el) => el.open), false);
    report.interactions.privacy =
      "passed: both triggers, Escape, close button and focus return";

    await page.addStyleTag({
      content:
        "p,li,label,h1,h2,h3,summary{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}",
    });
    assert.deepEqual((await checkLayout(page)).overflow, []);
    report.interactions.textSpacing = "passed: WCAG text spacing at 390 px";

    assert.deepEqual(report.consoleErrors, []);
    assert.deepEqual(report.failedRequests, []);
    report.result = "passed";
    await fs.writeFile(
      path.join(__dirname, "validation.json"),
      JSON.stringify(report, null, 2),
    );
    console.log(JSON.stringify({result: report.result, widths: report.viewports.map(v => v.viewport), interactions: report.interactions, consoleErrors: report.consoleErrors, failedRequests: report.failedRequests}, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
