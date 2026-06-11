/* ============================================================
   GrupoCESA — Google Analytics 4 + Google Ads
   con Consent Mode v2, cableado al banner de cookies.
   ------------------------------------------------------------
   CÓMO ACTIVAR:
   1) Reemplazá G-XXXXXXXXXX por tu ID de medición de GA4.
   2) (Opcional) Reemplazá AW-XXXXXXXXX por tu ID de Google Ads.
   3) Subí el sitio. El consentimiento se actualiza solo cuando
      el usuario elige en el banner (analytics / marketing).
   ============================================================ */
(function () {
  'use strict';

  // ▼▼▼ EDITAR ESTOS IDs ▼▼▼
  var GA4_ID = 'G-XXXXXXXXXX';      // GA4 (Analytics)
  var ADS_ID = 'AW-XXXXXXXXX';      // Google Ads (opcional; dejar vacío '' si no usás)
  // ▲▲▲ EDITAR ESTOS IDs ▲▲▲

  // No cargar si no configuraron el ID
  if (!GA4_ID || GA4_ID.indexOf('XXXX') !== -1) {
    // Modo demo: no hace nada hasta que pongas tu ID real.
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  // 1) Estado por defecto: TODO DENEGADO hasta que el usuario acepte (Consent Mode v2)
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  // 2) Aplicar elección ya guardada (si el usuario eligió en una visita anterior)
  try {
    var saved = JSON.parse(localStorage.getItem('gcesa_cookie_consent_v1') || 'null');
    if (saved && saved.choice) applyConsent(saved);
  } catch (e) {}

  // 3) Escuchar cambios desde el banner
  window.addEventListener('cookie-consent', function (e) { applyConsent(e.detail); });

  function applyConsent(state) {
    gtag('consent', 'update', {
      analytics_storage: state.analytics ? 'granted' : 'denied',
      ad_storage:        state.marketing ? 'granted' : 'denied',
      ad_user_data:      state.marketing ? 'granted' : 'denied',
      ad_personalization:state.marketing ? 'granted' : 'denied'
    });
  }

  // 4) Cargar gtag.js (una sola vez)
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);

  gtag('js', new Date());
  gtag('config', GA4_ID, { anonymize_ip: true });
  if (ADS_ID && ADS_ID.indexOf('XXXX') === -1) gtag('config', ADS_ID);
})();
