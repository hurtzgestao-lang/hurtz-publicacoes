(() => {
  "use strict";
  const strip = document.querySelector(".scope-strip");
  if (!strip) return;

  const ribbons = [...strip.querySelectorAll(".ticker-ribbon")].map(ribbon => {
    const track = ribbon.querySelector(".ticker-track");
    const [group, mirror] = track.children;
    return {ribbon, track, group, mirror, originals: [...group.children].map(node => node.cloneNode(true))};
  });

  function measure() {
    const speed = window.matchMedia("(max-width: 800px)").matches ? 18 : 25;
    for (const {ribbon, track, group, mirror, originals} of ribbons) {
      group.replaceChildren(...originals.map(node => node.cloneNode(true)));
      // Fill wide screens before duplicating the group for a seamless loop.
      while (group.offsetWidth > 0 && group.offsetWidth < ribbon.clientWidth) {
        group.append(...originals.map(node => node.cloneNode(true)));
      }
      mirror.replaceChildren(...[...group.children].map(node => node.cloneNode(true)));
      track.style.setProperty("--ticker-duration", `${group.offsetWidth / speed}s`);
    }
  }

  new ResizeObserver(measure).observe(strip);
  document.fonts.ready.then(measure);
  measure();
})();
