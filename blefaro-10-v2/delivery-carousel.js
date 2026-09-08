(() => {
  "use strict";
  const section = document.querySelector(".deliveries-carousel");
  if (!section) return;

  const sticky = section.querySelector(".delivery-sticky");
  const track = section.querySelector(".deliverables-grid");
  const cards = [...track.children];
  const previous = section.querySelector("[data-delivery-prev]");
  const next = section.querySelector("[data-delivery-next]");
  const position = section.querySelector(".delivery-position");
  const progress = section.querySelector(".delivery-progress");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let maxScroll = 0;
  let distance = 0;
  let inset = 16;
  let driven = false;
  let expectedLeft = track.scrollLeft;
  let frame = 0;

  const clamp = (value, max) => Math.max(0, Math.min(max, value));
  const number = (value) => String(value).padStart(2, "0");
  const cardLeft = (card) => card.offsetLeft - cards[0].offsetLeft;

  function updateControls() {
    const left = track.scrollLeft;
    const visible = cards.flatMap((card, index) => {
      const overlap = Math.min(left + track.clientWidth, cardLeft(card) + card.offsetWidth)
        - Math.max(left, cardLeft(card));
      return overlap >= card.offsetWidth / 2 ? [index + 1] : [];
    });
    const first = visible[0] || 1;
    const last = visible.at(-1) || first;
    position.textContent = `${number(first)}${last > first ? `–${number(last)}` : ""} / ${number(cards.length)}`;
    previous.disabled = left <= 1;
    next.disabled = left >= maxScroll - 1;
    progress.style.setProperty("--delivery-progress", maxScroll ? left / maxScroll : 1);
  }

  function syncToPage() {
    frame = 0;
    if (driven && distance) {
      const fraction = clamp((inset - section.getBoundingClientRect().top) / distance, 1);
      expectedLeft = fraction * maxScroll;
      track.scrollLeft = expectedLeft;
    }
    updateControls();
  }

  function scheduleSync() {
    if (!frame) frame = requestAnimationFrame(syncToPage);
  }

  function measure() {
    maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    inset = Math.max(12, Math.min(40, (window.innerHeight - sticky.offsetHeight) / 2));
    driven = !motion.matches && maxScroll > 0 && sticky.offsetHeight + 24 <= window.innerHeight;
    distance = maxScroll * 0.72;
    section.style.setProperty("--delivery-sticky-top", `${inset}px`);
    section.style.setProperty("--delivery-section-height", `${sticky.offsetHeight + distance}px`);
    section.classList.toggle("is-scroll-driven", driven);
    scheduleSync();
  }

  function pageTopFor(left) {
    return window.scrollY + section.getBoundingClientRect().top - inset
      + (maxScroll ? left / maxScroll * distance : 0);
  }

  function navigate(left) {
    const target = clamp(left, maxScroll);
    const behavior = motion.matches ? "instant" : "smooth";
    if (driven) window.scrollTo({top: pageTopFor(target), behavior});
    else track.scrollTo({left: target, behavior});
  }

  const step = () => cards[1] ? cardLeft(cards[1]) : track.clientWidth;
  previous.addEventListener("click", () => navigate(track.scrollLeft - step()));
  next.addEventListener("click", () => navigate(track.scrollLeft + step()));
  track.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const destinations = {
      ArrowLeft: track.scrollLeft - step(),
      ArrowRight: track.scrollLeft + step(),
      Home: 0,
      End: maxScroll,
    };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    navigate(destinations[event.key]);
  });

  // Keep native horizontal gestures aligned with the page's scroll position.
  track.addEventListener("scroll", () => {
    const left = track.scrollLeft;
    if (driven && Math.abs(left - expectedLeft) > 2) {
      expectedLeft = left;
      window.scrollTo({top: pageTopFor(left), behavior: "instant"});
    }
    updateControls();
  }, {passive: true});

  window.addEventListener("scroll", scheduleSync, {passive: true});
  window.addEventListener("resize", measure);
  window.addEventListener("pageshow", measure);
  motion.addEventListener("change", measure);
  const observer = new ResizeObserver(measure);
  observer.observe(sticky);
  observer.observe(track);
  section.classList.add("is-carousel");
  section.querySelector(".delivery-navigation").hidden = false;
  measure();
  document.fonts.ready.then(measure);
})();
