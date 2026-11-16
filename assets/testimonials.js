/* Carrusel de testimonios: tarjetas con desplazamiento horizontal (también con el dedo o el teclado),
   flechas, puntitos por grupo y sin rotación automática. */
(function () {
  var track = document.querySelector('.testi-track');
  if (!track) return;
  var cards = [].slice.call(track.children);
  var prevs = [].slice.call(document.querySelectorAll('.testi-nav.prev'));
  var nexts = [].slice.call(document.querySelectorAll('.testi-nav.next'));
  var dotsBox = document.querySelector('.testi-dots');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var perView = 1, step = 1, pages = 1;

  function measure() {
    var gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    var cw = cards[0].getBoundingClientRect().width;
    perView = Math.max(1, Math.round((track.clientWidth + gap) / (cw + gap)));
    step = cards[perView] ? cards[perView].offsetLeft - cards[0].offsetLeft : track.clientWidth;
    pages = Math.ceil(cards.length / perView);
  }
  function buildDots() {
    dotsBox.innerHTML = '';
    for (var p = 0; p < pages; p++) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'dot';
      b.setAttribute('aria-label', 'Ver grupo ' + (p + 1) + ' de ' + pages);
      (function (i) { b.addEventListener('click', function () { go(i); }); })(p);
      dotsBox.appendChild(b);
    }
  }
  function current() {
    var max = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= max - 2) return pages - 1;
    return Math.min(pages - 1, Math.max(0, Math.round(track.scrollLeft / step)));
  }
  function update() {
    var p = current();
    [].forEach.call(dotsBox.children, function (d, k) {
      d.classList.toggle('is-active', k === p);
      if (k === p) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
    prevs.forEach(function (b) { b.disabled = p === 0; });
    nexts.forEach(function (b) { b.disabled = p === pages - 1; });
  }
  function go(p) {
    p = Math.max(0, Math.min(pages - 1, p));
    track.scrollTo({ left: Math.min(p * step, track.scrollWidth - track.clientWidth), behavior: reduce ? 'auto' : 'smooth' });
    if (reduce) update();
  }

  prevs.forEach(function (b) { b.addEventListener('click', function () { go(current() - 1); }); });
  nexts.forEach(function (b) { b.addEventListener('click', function () { go(current() + 1); }); });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', function () { measure(); buildDots(); update(); });

  measure(); buildDots(); update();
})();
