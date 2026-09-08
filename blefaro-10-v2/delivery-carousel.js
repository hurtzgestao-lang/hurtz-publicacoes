(() => {
  "use strict";
  const section = document.querySelector(".deliveries-carousel");
  if (!section || !window.EmblaCarousel || !window.EmblaCarouselAutoScroll) return;

  const viewport = section.querySelector(".delivery-viewport");
  const toggle = section.querySelector(".delivery-motion-toggle");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const hover = window.matchMedia("(hover: hover)");
  let visible = false;
  let hovered = false;
  let dragging = false;
  let paused = false;
  const autoScroll = EmblaCarouselAutoScroll({
    speed: 0.7,
    startDelay: 0,
    playOnInit: false,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    stopOnFocusIn: false,
  });

  section.classList.add("is-carousel");
  const carousel = EmblaCarousel(viewport, {
    loop: true,
    align: "start",
    dragFree: true,
    duration: 25,
  }, [autoScroll]);

  function syncMotion(delay = 0) {
    const focused = section.contains(document.activeElement);
    const running = visible && !document.hidden && !motion.matches
      && !hovered && !dragging && !paused && !focused;
    if (running) autoScroll.play(delay);
    else autoScroll.stop();
    section.dataset.motion = running ? "running" : "paused";
  }

  function toggleMotion() {
    paused = !paused;
    const label = paused ? "Retomar movimento" : "Pausar movimento";
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
    syncMotion();
  }

  // Keyboard users can stop motion permanently without a visible navigation bar.
  toggle.hidden = false;
  toggle.addEventListener("click", toggleMotion);
  viewport.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const jump = motion.matches;
    const actions = {
      ArrowLeft: () => carousel.scrollPrev(jump),
      ArrowRight: () => carousel.scrollNext(jump),
      Home: () => carousel.scrollTo(0, jump),
      End: () => carousel.scrollTo(carousel.slideNodes().length - 1, jump),
      " ": toggleMotion,
    };
    if (!actions[event.key]) return;
    event.preventDefault();
    actions[event.key]();
  });

  viewport.addEventListener("mouseenter", () => {
    hovered = hover.matches;
    syncMotion();
  });
  viewport.addEventListener("mouseleave", () => {
    hovered = false;
    syncMotion();
  });
  section.addEventListener("focusin", () => syncMotion());
  section.addEventListener("focusout", () => requestAnimationFrame(() => syncMotion()));
  carousel.on("pointerDown", () => { dragging = true; syncMotion(); });
  carousel.on("pointerUp", () => { dragging = false; syncMotion(1000); });
  carousel.on("reInit", () => syncMotion());
  document.addEventListener("visibilitychange", () => syncMotion());
  motion.addEventListener("change", () => syncMotion());
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncMotion();
  }, {threshold: 0.2}).observe(viewport);
})();
