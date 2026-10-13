/**
 * slide-guardrail.js — overflow safety net for Hurtz HTML decks.
 *
 * Why this exists
 * ---------------
 * Decks built as 1920x1080 slides with `overflow:hidden` quietly clip content
 * when it doesn't fit. The footer stays absolute-positioned at the bottom and
 * sits ON TOP of the clipped content — looking broken: an element appears
 * cut, and a different colored band (the footer area) overlaps it.
 *
 * This script is the safety net so it never happens in production again.
 *
 * What it does
 * ------------
 * 1. After fonts load, it measures every `.slide` element's intrinsic content
 *    height via scrollHeight.
 * 2. If a slide's content exceeds the design height (default 1080), it scales
 *    down the slide's first content container (`.body` or `.title-grid`) with
 *    `transform: scale()` until the content fits.
 * 3. It logs a console.warn naming the offending slide (so the author knows).
 * 4. With `?debug=1` in the URL, it paints a red dashed outline + "OVERFLOW"
 *    badge on every slide that needed scaling — visual signal during dev.
 *
 * How to include in a deck
 * ------------------------
 *   <script src="path/to/slide-guardrail.js"></script>
 *
 * Or copy the IIFE inline. No dependencies. Idempotent on resize.
 *
 * Conventions assumed
 * -------------------
 * - Slides are `.slide` elements at design size 1920x1080 with overflow:hidden
 * - Each slide has either a `.body` or `.title-grid` direct child as the
 *   primary content container — that's what gets scaled.
 * - If your deck uses different selectors, set window.HURTZ_GUARDRAIL_OPTS
 *   before this script loads:
 *     window.HURTZ_GUARDRAIL_OPTS = {
 *       slideSelector: '.my-slide',
 *       contentSelector: '.my-content',
 *       designHeight: 1080,
 *     };
 *
 * Caveats
 * -------
 * - Scale uses `transform-origin: top left`, so vertically-centered content
 *   moves to the top when scaled. Treat scaling as last-resort fallback —
 *   prefer fixing the layout (smaller font, fewer rows, `.dense` modifier)
 *   so no scaling is needed for a clean pixel-perfect result.
 * - Auto-scaling cannot fix horizontal overflow. Those need manual fixes.
 */
(function(){
  const opts = (window.HURTZ_GUARDRAIL_OPTS || {});
  const SLIDE_SEL = opts.slideSelector || '.slide';
  const CONTENT_SEL = opts.contentSelector || '.body, .title-grid';
  const DESIGN_H = opts.designHeight || 1080;
  const debug = /[?&]debug=1/.test(location.search);

  // Inject debug styles once
  if (debug && !document.getElementById('slide-guardrail-debug-css')) {
    const css = document.createElement('style');
    css.id = 'slide-guardrail-debug-css';
    css.textContent = `
      ${SLIDE_SEL}.guardrail-overflow{outline:4px dashed #B52A2A;outline-offset:-4px;position:relative}
      ${SLIDE_SEL}.guardrail-overflow::after{
        content:"OVERFLOW · auto-scaled to " attr(data-guardrail-scale);
        position:absolute;top:0;right:0;
        background:#B52A2A;color:#fff;
        padding:6px 12px;font-size:12px;letter-spacing:.16em;font-weight:700;
        text-transform:uppercase;font-family:Inter,sans-serif;z-index:9999;
      }`;
    document.head.appendChild(css);
  }

  function fitSlide(slide){
    // Reset any prior fit so we measure the intrinsic content
    slide.querySelectorAll('[data-guardrail-fit]').forEach(el => {
      el.style.transform = '';
      el.style.width = '';
      el.style.transformOrigin = '';
      el.removeAttribute('data-guardrail-fit');
    });
    slide.classList.remove('guardrail-overflow');
    slide.removeAttribute('data-guardrail-scale');

    // Slides may be display:none when not active. Force visibility temporarily.
    const prevDisplay = slide.style.display;
    const wasHidden = getComputedStyle(slide).display === 'none';
    if (wasHidden) slide.style.display = 'flex';

    const trueH = slide.scrollHeight;
    const overflow = trueH - DESIGN_H;

    let report = null;
    if (overflow > 1) {
      const target = slide.querySelector(CONTENT_SEL);
      if (target) {
        const scale = (DESIGN_H - 8) / trueH;
        target.style.transformOrigin = 'top left';
        target.style.transform = 'scale(' + scale + ')';
        target.style.width = (100 / scale) + '%';
        target.setAttribute('data-guardrail-fit', '');
        slide.setAttribute('data-guardrail-scale', scale.toFixed(3));
        if (debug) slide.classList.add('guardrail-overflow');
        const label = (slide.querySelector('h1, h2, h3')?.innerText || '').trim().slice(0, 50);
        report = { slide: label, intrinsicHeight: trueH, overflowPx: overflow, scaledTo: +scale.toFixed(3) };
      } else {
        report = { slide: '(no content target)', intrinsicHeight: trueH, overflowPx: overflow, scaledTo: null };
      }
    }
    if (wasHidden) slide.style.display = prevDisplay;
    return report;
  }

  function runAll(){
    const slides = document.querySelectorAll(SLIDE_SEL);
    if (!slides.length) return;
    const reports = [];
    slides.forEach(s => {
      const r = fitSlide(s);
      if (r) reports.push(r);
    });
    if (reports.length) {
      console.warn(
        '[slide-guardrail] ' + reports.length + ' of ' + slides.length +
        ' slide(s) overflowed and were auto-scaled. Fix the layout for a ' +
        'pixel-perfect result.', reports
      );
    } else {
      console.log('[slide-guardrail] All ' + slides.length + ' slides fit ' + DESIGN_H + 'px.');
    }
  }

  function boot(){
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runAll);
    } else {
      setTimeout(runAll, 250);
    }
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(runAll, 200); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose for manual re-run
  window.HurtzSlideGuardrail = { run: runAll, fitSlide };
})();
