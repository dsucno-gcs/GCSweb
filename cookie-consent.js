/* ============================================================
   GrupoCESA — Banner de consentimiento de cookies
   Autónomo: inyecta estilos + DOM, guarda elección en localStorage.
   Dispara window.dataLayer push y un evento 'cookie-consent' para
   que actives Analytics/Ads sólo si el usuario acepta.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'gcesa_cookie_consent_v1';

  // No mostrar si ya eligió
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  function fireConsent(state) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_update', consent: state });
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: state }));
  }
  if (saved && saved.choice) { fireConsent(saved); return; }

  // Detectar prefijo de ruta (home vs subpáginas) para enlazar la política
  var prefix = /\/(blog|legal)\//.test(location.pathname) ? '../' : '';
  var cookiesUrl = prefix + 'legal/politica-cookies.html';

  // ---- estilos ----
  var css = '' +
  '.cc-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;' +
    'background:var(--surface,#0E1812);color:var(--text,#E9F4ED);border:1px solid var(--border-strong,rgba(120,224,170,.26));' +
    'border-radius:18px;padding:22px 24px;box-shadow:0 30px 80px -30px rgba(0,0,0,.7);' +
    'font-family:var(--font-body,system-ui,sans-serif);transform:translateY(140%);transition:transform .5s cubic-bezier(.22,.61,.36,1)}' +
  '.cc-banner.in{transform:none}' +
  '.cc-banner h4{font-family:var(--font-head,system-ui,sans-serif);font-size:16px;margin:0 0 8px;font-weight:600;display:flex;align-items:center;gap:9px}' +
  '.cc-banner h4 svg{width:19px;height:19px;stroke:var(--accent,#10B85F);flex:none}' +
  '.cc-banner p{font-size:13.5px;line-height:1.55;color:var(--text-dim,#9CB3A7);margin:0 0 16px}' +
  '.cc-banner p a{color:var(--accent,#10B85F);text-decoration:underline;text-underline-offset:2px}' +
  '.cc-actions{display:flex;flex-wrap:wrap;gap:10px}' +
  '.cc-btn{font-family:inherit;font-weight:700;font-size:14px;padding:11px 18px;border-radius:999px;cursor:pointer;border:1px solid transparent;transition:transform .2s,background .2s,border-color .2s}' +
  '.cc-btn:hover{transform:translateY(-1px)}' +
  '.cc-accept{background:var(--accent,#10B85F);color:#04130B}' +
  '.cc-reject{background:transparent;color:var(--text,#E9F4ED);border-color:var(--border-strong,rgba(120,224,170,.26))}' +
  '.cc-config{background:transparent;color:var(--text-dim,#9CB3A7);border:none;padding:11px 8px;text-decoration:underline;text-underline-offset:3px}' +
  '.cc-prefs{display:none;margin:4px 0 16px;border-top:1px solid var(--border,rgba(120,224,170,.13));padding-top:14px}' +
  '.cc-prefs.show{display:block}' +
  '.cc-row{display:flex;align-items:flex-start;gap:12px;padding:9px 0}' +
  '.cc-row label{font-size:13.5px;font-weight:600;color:var(--text,#E9F4ED);display:block}' +
  '.cc-row small{font-size:12px;color:var(--text-dim,#9CB3A7);display:block;margin-top:2px}' +
  '.cc-row input{width:18px;height:18px;margin-top:2px;accent-color:var(--accent,#10B85F);flex:none}' +
  '.cc-row input:disabled{opacity:.5}' +
  '@media(max-width:520px){.cc-actions{flex-direction:column}.cc-btn{width:100%}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ---- DOM ----
  var banner = document.createElement('div');
  banner.className = 'cc-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Consentimiento de cookies');
  banner.innerHTML =
    '<h4><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="8" r="1" fill="currentColor" stroke="none"/></svg> Usamos cookies</h4>' +
    '<p>Usamos cookies propias y de terceros para que el sitio funcione, analizar el tráfico y medir nuestras campañas. Podés aceptar todas, rechazarlas o elegir. Más info en nuestra <a href="' + cookiesUrl + '">Política de cookies</a>.</p>' +
    '<div class="cc-prefs" id="ccPrefs">' +
      '<div class="cc-row"><input type="checkbox" checked disabled><div><label>Necesarias</label><small>Imprescindibles para el funcionamiento del sitio. Siempre activas.</small></div></div>' +
      '<div class="cc-row"><input type="checkbox" id="ccAnalytics" checked><div><label>Analíticas</label><small>Nos ayudan a entender el uso del sitio (ej. Google Analytics).</small></div></div>' +
      '<div class="cc-row"><input type="checkbox" id="ccMarketing" checked><div><label>Marketing</label><small>Medición de campañas y anuncios (ej. Google Ads).</small></div></div>' +
    '</div>' +
    '<div class="cc-actions">' +
      '<button class="cc-btn cc-accept" id="ccAccept">Aceptar todas</button>' +
      '<button class="cc-btn cc-reject" id="ccReject">Rechazar</button>' +
      '<button class="cc-btn cc-config" id="ccConfig">Configurar</button>' +
    '</div>';
  document.body.appendChild(banner);
  requestAnimationFrame(function () { setTimeout(function(){ banner.classList.add('in'); }, 300); });

  function save(choice, analytics, marketing) {
    var state = { choice: choice, necessary: true, analytics: analytics, marketing: marketing, ts: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    fireConsent(state);
    banner.classList.remove('in');
    setTimeout(function () { banner.remove(); }, 500);
  }

  document.getElementById('ccAccept').addEventListener('click', function () { save('accept_all', true, true); });
  document.getElementById('ccReject').addEventListener('click', function () { save('reject', false, false); });
  document.getElementById('ccConfig').addEventListener('click', function () {
    var prefs = document.getElementById('ccPrefs');
    var btn = this;
    if (prefs.classList.contains('show')) {
      // segundo click = guardar selección
      save('custom', document.getElementById('ccAnalytics').checked, document.getElementById('ccMarketing').checked);
    } else {
      prefs.classList.add('show');
      btn.textContent = 'Guardar selección';
    }
  });
})();
