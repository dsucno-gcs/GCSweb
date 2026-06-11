# GrupoCESA · Aris — Guía de despliegue

Sitio web estático (HTML/CSS/JS) optimizado para SEO, AEO (motores de IA) y Google Ads.
No requiere build ni servidor de aplicaciones: se sirve como archivos estáticos.

---

## 1. Estructura de archivos

```
/  (raíz del dominio → grupocesa.net)
├── index.html                   ← Home (página de inicio)
├── styles.css                   ← Sistema visual (home + subpáginas)
├── subpage.css                  ← Estilos de blog y páginas legales
├── analytics.js                 ← GA4 + Google Ads (EDITAR IDs, ver §4)
├── cookie-consent.js            ← Banner de cookies (fuente; ya está inline en cada página)
├── tweaks-panel.jsx             ← Solo para el editor de diseño; NO es necesario en producción
├── og-cover.jpg                 ← Imagen para compartir en redes (1200×630)
├── sitemap.xml                  ← Mapa del sitio (ajustar dominio, ver §3)
├── robots.txt                   ← Permite buscadores + bots de IA (ajustar dominio)
├── assets/
│   ├── grupocesa-logo.jpg
│   └── clientes.png             ← Grilla de logos de clientes
├── blog/
│   ├── index.html               ← Hub del blog
│   ├── que-es-un-voicebot.html
│   ├── voicebot-vs-chatbot.html
│   ├── ia-cobranzas-atencion-argentina.html
│   ├── telefonia-ip-yeastar-argentina.html
│   ├── omnicanalidad-con-ia.html
│   └── cuanto-cuesta-un-voicebot.html
└── legal/
    ├── politica-privacidad.html
    ├── terminos-condiciones.html
    └── politica-cookies.html
```

> **GrupoCESA-Aris-standalone.html** es una copia de la home en un solo archivo (todo embebido).
> Sirve para previsualizar offline o enviar por mail; **no se usa para el sitio en producción**.

---

## 2. Qué subir y qué no

**Subir a producción:** todos los `.html`, `styles.css`, `subpage.css`, `analytics.js`,
`cookie-consent.js`, `og-cover.jpg`, `sitemap.xml`, `robots.txt`, y las carpetas `assets/`,
`blog/`, `legal/`.

**No hace falta subir:** `tweaks-panel.jsx`, `GrupoCESA-Aris-standalone.html`, la carpeta
`screenshots/`. (No molestan si quedan, pero son innecesarios.)

---

## 3. Ajustes de dominio y página de inicio

1. **Página de inicio:** ya está como `index.html`, así que carga sola en la raíz del dominio
   (y funciona directo con GitHub Pages / cualquier hosting). No hay que renombrar nada.
2. **Dominio:** si el dominio final NO es `https://www.grupocesa.net/`, reemplazá esa URL en:
   - `sitemap.xml` (todas las `<loc>`)
   - `robots.txt` (línea `Sitemap:`)
   - las etiquetas `<link rel="canonical">` y `og:`/`twitter:` de cada `.html`
3. **og-cover:** las metaetiquetas apuntan a `https://www.grupocesa.net/og-cover.jpg`.
   Verificá que la imagen quede accesible en esa URL.

---

## 4. Activar Google Analytics 4 y Google Ads

Editá **`analytics.js`** (una sola vez, aplica a todo el sitio):

```js
var GA4_ID = 'G-XXXXXXXXXX';   // ← tu ID de medición GA4
var ADS_ID = 'AW-XXXXXXXXX';   // ← tu ID de Google Ads (dejar '' si no usás Ads)
```

- Mientras el ID tenga `XXXX`, el script no carga nada (modo demo).
- Usa **Consent Mode v2**: por defecto todo denegado; se habilita solo cuando el usuario
  acepta en el banner de cookies (analíticas / marketing por separado).
- Para disparar una conversión de Ads (ej. envío del formulario), usá:
  ```js
  if (window.gtag) gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/etiqueta' });
  ```

---

## 5. Banner de cookies

- Ya está **embebido (inline)** en cada página → funciona aunque `cookie-consent.js` no se cargue.
- Si querés modificar textos/estilos, editá `cookie-consent.js` y volvé a embeberlo, o editá
  directamente el bloque `<script>` al final de cada `.html`.
- Guarda la elección en `localStorage` (`gcesa_cookie_consent_v1`) y dispara el evento
  `cookie-consent` + push a `dataLayer` (`cookie_consent_update`).

---

## 6. Formulario de contacto

El formulario de la home (`#leadForm`) **ya está cableado para enviar**: usa `fetch` a un endpoint
y, al recibir OK, muestra el mensaje de éxito, maneja errores y dispara el tracking de conversión.
Falta solo conectar el destino:

1. **Endpoint:** en el `<form id="leadForm" action="...">` reemplazá `https://formspree.io/f/TU_ID`
   por tu ID real de [Formspree](https://formspree.io) (gratis para empezar) o por la URL de tu
   CRM/API. Los campos ya tienen `name=` (`nombre`, `empresa`, `email`, `telefono`, `industria`,
   `mensaje`), así que el backend los recibe listos.
   > Mientras quede `TU_ID`, el form funciona en "modo demo" (muestra éxito sin enviar nada).
2. **Conversión de Google Ads:** en el handler del submit (al final del `<script>` inline de la home)
   reemplazá `AW-XXXXXXXXX/TU_ETIQUETA` por el `send_to` real de tu acción de conversión de Ads.
   El evento GA4 `generate_lead` ya se dispara solo.
3. El envío también hace push de `lead_form_submit` a `dataLayer` (por si usan Google Tag Manager).

Datos placeholder a reemplazar por los reales: teléfonos AR/Chile, emails
(`comercial@`, `privacidad@`, `legales@`) en el footer, contacto y páginas legales.

---

## 7. Checklist post-publicación (SEO/AEO)

- [ ] Verificar el sitio en **Google Search Console** y enviar `sitemap.xml`.
- [ ] Probar el marcado con la **Prueba de resultados enriquecidos** de Google (FAQ/Article).
- [ ] Compartir una URL en WhatsApp/LinkedIn y confirmar que aparece `og-cover.jpg`.
- [ ] Configurar GA4 y, si aplica, la conversión de Google Ads en el formulario.
- [ ] Publicar 1–2 artículos nuevos por mes en `blog/` para mantener el contenido fresco
      (replicar la estructura de cualquier artículo existente: answer-box + JSON-LD + mini-FAQ).

---

## 8. Cómo agregar un artículo nuevo al blog

1. Copiá un artículo existente de `blog/` (p. ej. `que-es-un-voicebot.html`) y renombralo.
2. Cambiá: `<title>`, meta description, canonical, el JSON-LD (`headline`, fechas, FAQ),
   el `<h1>`, la fecha, y el cuerpo (`answer-box`, secciones, `key-takeaways`, `mini-faq`, CTA).
3. Agregá una tarjeta enlazando al nuevo archivo en `blog/index.html`.
4. Sumá su URL a `sitemap.xml`.

---

## 9. Publicar gratis con GitHub Pages

1. Subí todos los archivos al repositorio (Add file → Upload files, o `git push`).
2. En el repo: **Settings → Pages**.
3. En **Source** elegí la rama (`main`/`master`) y la carpeta `/ (root)`. Guardá.
4. A los minutos el sitio queda en `https://<usuario>.github.io/<repo>/`.
   - Como la home es `index.html`, carga sola; el blog y legales funcionan por sus rutas.
   - Si usás un dominio propio (grupocesa.net), configuralo en **Settings → Pages → Custom domain**
     y acordate de ajustar las URLs absolutas (canonical, og:, sitemap, robots) al dominio real.

> Nota: `uploads/` y `.thumbnail` no son necesarios para producción; podés no subirlos.

---

© 2026 GrupoCESA — Comunicaciones unificadas, conversaciones inteligentes.
