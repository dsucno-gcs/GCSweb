/* Carrusel del visual del hero (home y páginas de servicio): rota solo cada 5 s; se frena con el foco de teclado,
   con la pestaña oculta o con el botón de pausa, y no arranca si el usuario pidió menos movimiento. */
(function () {
  var stage = document.getElementById('omniStage');
  if (!stage) return;
  var slides = [].slice.call(stage.querySelectorAll('.slide'));
  var dots = [].slice.call(document.querySelectorAll('.omni-dots .dot'));
  var pauseBtn = document.querySelector('.omni-pause');
  var box = stage.parentNode;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var i = 0, timer = null, paused = false, hover = false;

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
    dots.forEach(function (d, k) {
      d.classList.toggle('is-active', k === i);
      if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function start() {
    stop();
    if (paused || hover || reduce || document.hidden) return;
    timer = setInterval(function () { show(i + 1); }, 5000);
  }
  function setPaused(p) {
    paused = p;
    pauseBtn.classList.toggle('is-paused', p);
    pauseBtn.setAttribute('aria-label', p ? 'Reanudar la rotación' : 'Pausar la rotación');
    stage.setAttribute('aria-live', p ? 'polite' : 'off');
    start();
  }

  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
  if (reduce) { pauseBtn.style.display = 'none'; }
  else { pauseBtn.addEventListener('click', function () { setPaused(!paused); }); }
  /* solo el foco de teclado frena la rotación: el mouse no (un clic en un punto no debe dejarla pausada) */
  box.addEventListener('focusin', function (e) {
    if (e.target.matches && e.target.matches(':focus-visible')) { hover = true; stop(); }
  });
  box.addEventListener('focusout', function () { hover = false; start(); });
  document.addEventListener('visibilitychange', start);
  start();
})();
