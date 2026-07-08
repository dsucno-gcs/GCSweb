# BRIEF DE DESARROLLO WEB
## GrupoCESA — Nueva Web Corporativa

> Especificación completa de estructura, contenido y textos · Junio 2026

| Campo | Detalle |
|---|---|
| **Destinatario** | Daniel (desarrollo front-end) |
| **Referencia** | https://dsucno-gcs.github.io/GCSweb/index.html |
| **Estado** | Prototipo — pendiente ajustes según este brief |
| **Fecha** | Junio 2026 |

> **Objetivo de este documento**
> Consolidar todas las decisiones tomadas sobre la nueva web de GrupoCESA para que el equipo de desarrollo pueda ejecutar sin ambigüedad. Este brief define estructura de navegación, contenido por sección, textos propuestos y criterios de posicionamiento. Cualquier duda sobre intención de marca o contenido debe resolverse contra este documento antes de implementar.

---

## 1. Contexto y decisiones de base

### ¿Qué se mantiene del prototipo actual?

El trabajo técnico de base está bien ejecutado. Se mantiene todo lo siguiente sin cambios:

- Estructura one-page con navegación por anclas.
- Schema markup y metadatos técnicos de SEO.
- Sección de logos de clientes.
- Sección de metodología / cómo trabajamos.
- Sección de alianzas / partners (Yeastar y otros).
- Sección de FAQ.
- Blog.
- Formulario de contacto y CTAs.

### ¿Qué cambia?

Los cambios son de posicionamiento estratégico y arquitectura de contenido, no de diseño visual:

- La empresa no se presenta como una empresa de VoiceBot. Se presenta como empresa de comunicaciones unificadas.
- Las cuatro soluciones tienen igual jerarquía visual y de navegación.
- VoiceBot ARIS sale del menú principal y pasa a ser una sección dentro de Soluciones.
- La sección Nosotros pasa a ser una página/sección separada con foco en equipo, trayectoria y diferencial de servicio.
- Los casos de éxito se equilibran entre las cuatro soluciones.
- Se actualizan los textos del hero, título y meta description.

---

## 2. Estructura de navegación

El menú principal debe reflejar la arquitectura de la empresa. Estructura definitiva:

| Ítem de menú | Tipo | Comportamiento |
|---|---|---|
| **Inicio** | Ancla | Scroll al hero (primera pantalla). |
| **Soluciones** | Dropdown o ancla | Despliega las 4 soluciones como opciones. Cada una lleva a su sección en la página o a una subpágina. |
| **Nosotros** | Página separada o sección anclada | Lleva a la sección de equipo, trayectoria y diferencial de servicio. |
| **Casos de éxito** | Ancla | Scroll a la sección de casos en la página principal. |
| **Blog** | Página separada | Listado de artículos. |
| **Contacto** | Ancla o modal | Formulario de contacto. |

> ⚠️ **Cambio crítico respecto al prototipo**
> Eliminar "Voicebot ARIS" como ítem independiente del menú. Pasa a ser una opción dentro del dropdown de Soluciones, al mismo nivel que las otras tres.

---

## 3. Estructura de secciones — orden y contenido

La página principal sigue el siguiente orden de secciones, de arriba hacia abajo:

### 3.1 Hero — Primera pantalla

Es lo primero que ve el visitante. Debe comunicar en 3 segundos qué hace la empresa, para quién y dónde.

| Campo | Contenido |
|---|---|
| **Objetivo** | Posicionar a GrupoCESA como empresa de comunicaciones unificadas, no como empresa de VoiceBot. |
| **Título H1** | "Comunicaciones unificadas para empresas que quieren atender mejor y operar más eficientemente" |
| **Subtítulo** | "Telefonía IP, omnicanalidad, chatbots, contact center y VoiceBot con IA — implementados y soportados por un equipo especializado en Argentina." |
| **CTA principal** | Solicitá una demo gratuita |
| **CTA secundario** | Conocé nuestras soluciones |
| **Visual** | Imagen o animación que represente comunicaciones / equipo de trabajo (no solo bots ni IA) |

> **Nota de marca**
> El hero anterior usaba "VoiceBot y agentes de IA" como eje. El nuevo eje es "comunicaciones unificadas". Aris sigue siendo el producto diferencial pero aparece nombrado en el subtítulo junto a los demás, no como protagonista excluyente.

---

### 3.2 Soluciones — Cuatro pilares iguales

Inmediatamente después del hero. Cuatro cards o bloques visuales de igual peso, que funcionan como entrada a cada solución.

| Campo | Contenido |
|---|---|
| **Título de sección** | "Nuestras soluciones" (sin subtítulo que enmarque todo bajo IA) |
| **Subtítulo opcional** | "Una empresa, cuatro soluciones para todas tus comunicaciones." |
| **Estructura visual** | 4 cards del mismo tamaño, mismo peso visual, mismo tipo de CTA. |
| **Orden sugerido** | 1. Omnicanalidad y Chatbots IA / 2. Telefonía IP / 3. Contact Center / 4. VoiceBot ARIS |
| **Comportamiento al clic** | Cada card lleva a su sección propia (ancla o subpágina). Ver detalle en Sección 3.3. |

| Solución | Ícono / color sugerido | Tagline de la card |
|---|---|---|
| **Omnicanalidad y Chatbots IA** | Canales / conversación | Atendé a tus clientes en WhatsApp, web y más canales con un asistente inteligente |
| **Telefonía IP** | Teléfono / red | Infraestructura de voz robusta, escalable y con soporte local. Partner oficial Yeastar. |
| **Contact Center** | Auricular / agente | Gestión centralizada de interacciones para equipos de atención al cliente. |
| **VoiceBot ARIS** | Robot / IA — destacado | Atención telefónica automática con IA generativa en español rioplatense. |

---

### 3.3 Secciones de cada solución (subsecciones o subpáginas)

Cuando el usuario hace clic en una de las 4 soluciones, accede a una sección profunda con información completa de ese producto. Pueden implementarse como anclas en la misma página o como subpáginas independientes — a definir con Dani según el enfoque técnico más conveniente para el SEO.

Cada sección de solución debe seguir la misma estructura para consistencia:

| Bloque | Contenido |
|---|---|
| **1. Título y descripción** | Qué es la solución y para qué tipo de empresa es ideal. |
| **2. Funcionalidades clave** | Lista de 4 a 6 puntos de lo que incluye o permite hacer. |
| **3. Diferenciador GrupoCESA** | Por qué conviene implementarlo con GrupoCESA y no con otro proveedor o directamente con el fabricante. |
| **4. Caso de éxito asociado** | Mínimo un caso con industria, problema, solución y resultado medible. |
| **5. FAQ de la solución** | 4 a 6 preguntas frecuentes específicas de ese producto (con schema FAQPage). |
| **6. CTA** | Demo gratuita / Consulta sin cargo / Contacto. |

> **Foco especial en VoiceBot ARIS**
> La sección de ARIS puede ser más extensa y detallada que las demás — es el producto más diferencial y con mayor potencial de posicionamiento en IA generativa. Puede incluir video demo, comparativa de casos, detalles técnicos de integración y lista de integraciones compatibles.

---

### 3.4 Casos de éxito

Los casos de éxito actuales del prototipo son todos de VoiceBot. Esto sesga la percepción de la empresa y no posiciona las otras tres soluciones. Se requiere equilibrar la distribución.

| Campo | Detalle |
|---|---|
| **Distribución objetivo** | Mínimo 1 caso por solución. Ideal: 2 por solución (8 en total). |
| **Formato** | Industria — Problema — Solución — Resultado medible. Puede ser anonimizado. |
| **Casos de VoiceBot** | Mantener los existentes. Están bien construidos. |
| **Casos a desarrollar** | Telefonía IP: 1 caso (empresa mediana o corporativa). Omnicanalidad: 1 caso (retail, salud, finanzas o similar). Contact Center: 1 caso. |
| **Fuente** | Marcos provee los datos de los proyectos. Dani implementa el formato. |

---

### 3.5 Nosotros — Sección separada

Esta sección sale de la página principal y pasa a ser una sección propia (subpágina o sección anclada de peso equivalente a una página). El objetivo es comunicar dos diferenciales de marca que hoy no están presentes en el prototipo: el equipo humano y la trayectoria de 25 años.

**Bloques de contenido requeridos:**

| Bloque | Contenido y criterio |
|---|---|
| **Introducción de empresa** | 3 a 4 líneas que posicionen a GrupoCESA como empresa especializada en comunicaciones unificadas, con 25 años de trayectoria, presencia en Argentina y expansión en LATAM. Tono: confianza, solidez, experiencia. Sin términos corporativos vacíos. |
| **25 años de trayectoria** | Timeline o bloque visual que muestre la evolución: inicio en telefonía IP → incorporación de omnicanalidad → chatbots → IA conversacional y VoiceBot. Mensaje implícito: no somos una startup, evolucionamos con la tecnología durante 25 años. |
| **El equipo** | Fotos del equipo o de parte del equipo (a definir quiénes participan). Nombres, rol y especialización. Mensaje: hay personas reales y especializadas detrás de cada proyecto. Esto contrasta con proveedores 100% remotos o plataformas self-service. |
| **Diferencial de servicio** | Párrafo o bullets sobre el modelo de trabajo: implementación consultiva, diseño conjunto del proyecto, soporte personalizado post-implementación, atención preferencial a clientes core. Texto sugerido: ver Sección 5 de este documento. |
| **Misión y visión** | Mantener los textos actuales o refinarlos. No es el foco de esta sección pero deben estar. |

> **Criterio de diseño para Nosotros**
> La sección debe transmitir calor humano y solidez. No usar estética de startup tecnológica (degradados de neón, animaciones excesivas). Priorizar fotos reales del equipo sobre ilustraciones o íconos. El tono visual debe ser profesional pero cercano.

---

## 4. Textos propuestos — cambios concretos

*Columna izquierda: texto actual del prototipo o texto ausente. Columna derecha: texto propuesto para implementar.*

### 4.1 Título de página y meta description

| Campo | Texto actual ❌ | Texto propuesto ✅ |
|---|---|---|
| **Título de página** | *Voicebot y Agentes de IA en Argentina \| GrupoCESA · Aris* | GrupoCESA · Telefonía IP, Omnicanalidad y VoiceBot con IA para empresas en Argentina |
| **Meta description** | *Voicebot con IA generativa, agentes de IA y omnicanalidad (texto centrado en IA/VoiceBot)* | GrupoCESA: comunicaciones unificadas para empresas en Argentina y LATAM. Telefonía IP Yeastar, omnicanalidad, chatbots, contact center y VoiceBot con IA. Soporte local. |

### 4.2 Hero — Título H1 y subtítulo

| Campo | Texto actual ❌ | Texto propuesto ✅ |
|---|---|---|
| **H1 actual** | *Voicebot y agentes de IA para empresas en Argentina* | Comunicaciones unificadas para empresas que quieren atender mejor y operar más eficientemente |
| **Subtítulo** | *(Sin subtítulo que incluya las 4 soluciones)* | Telefonía IP, omnicanalidad, chatbots, contact center y VoiceBot con IA — implementados y soportados por un equipo especializado en Argentina. |

### 4.3 Sección de soluciones — título y encuadre

| Campo | Texto actual ❌ | Texto propuesto ✅ |
|---|---|---|
| **Título sección** | *Una sola plataforma para toda tu comunicación, potenciada con IA generativa de extremo a extremo* | Nuestras soluciones |
| **Subtítulo sección** | *(Ausente o centrado en IA)* | Una empresa, cuatro soluciones para todas tus comunicaciones. Desde la infraestructura de voz hasta la atención automatizada con IA. |

### 4.4 Texto para la sección Nosotros — bloques propuestos

**Párrafo de introducción:**

> GrupoCESA es una empresa argentina especializada en soluciones de comunicación para organizaciones. Con más de 25 años de trayectoria, comenzamos en el mundo de la telefonía IP y fuimos incorporando, a medida que evolucionó la tecnología, soluciones de omnicanalidad, chatbots y, en los últimos años, VoiceBot con IA generativa.
>
> Hoy operamos en Argentina, Chile y LATAM, trabajando con empresas medianas, corporaciones y organismos públicos que necesitan tecnología de comunicación confiable, implementada por un equipo que conoce el negocio.

**Diferencial de servicio (texto propuesto):**

> Lo que nos diferencia no es solo la tecnología que implementamos, sino cómo lo hacemos.
>
> Cada proyecto se diseña junto con el cliente: entendemos el proceso, definimos el alcance, configuramos la solución y acompañamos la puesta en marcha. No vendemos licencias y nos retiramos — nos quedamos.
>
> Nuestros clientes cuentan con un equipo local, especializado y disponible. Personas reales con nombre y apellido, que conocen su operación y están disponibles cuando algo no funciona como debería.
>
> Eso es lo que 25 años de trabajo en comunicaciones nos enseñó: la tecnología sin soporte humano no es una solución, es un problema.

**Timeline de trayectoria (referencia para el diseño):**

- Fundación: inicios en telefonía IP y PBX corporativa
- Expansión a soluciones de omnicanalidad y WhatsApp Business
- Incorporación de chatbots y automatización de atención al cliente
- Desarrollo de VoiceBot con IA generativa — producto ARIS
- Operación en Argentina, Chile y expansión LATAM
- +25 años · +40 clientes activos · +2 países

### 4.5 FAQ de VoiceBot ARIS — preguntas sugeridas

Estas preguntas deben implementarse con schema FAQPage. Son las consultas exactas que los usuarios hacen a modelos de IA como ChatGPT o Gemini.

**¿El VoiceBot de GrupoCESA entiende el español rioplatense?**
Sí. ARIS está entrenado con modelos de lenguaje adaptados al español rioplatense, incluyendo expresiones coloquiales y variaciones propias del mercado argentino.

**¿Cuánto tiempo lleva implementar el VoiceBot?**
El tiempo estándar de implementación es de 30 días hábiles para configuraciones básicas, y entre 45 y 60 días para proyectos con integraciones complejas (CRM, ERP, sistemas de turnos).

**¿Se puede integrar con el sistema telefónico que ya tiene mi empresa?**
Sí. ARIS se integra con las principales plataformas de telefonía IP (Asterisk, FreePBX, 3CX, Cisco y otros) y con operadores SIP locales. No es necesario cambiar de proveedor.

**¿Qué pasa cuando el VoiceBot no puede resolver la consulta?**
ARIS detecta automáticamente cuándo escalar y transfiere la llamada a un agente humano con el contexto de la conversación previa, sin que el cliente tenga que repetir la información.

**¿Cuántas llamadas simultáneas puede manejar?**
La plataforma escala automáticamente según el volumen. No hay un límite fijo de concurrencia; la capacidad se ajusta a la demanda sin impacto en la calidad de la atención.

**¿GrupoCESA hace el soporte post-implementación?**
Sí. Todos nuestros clientes cuentan con soporte local en Argentina. No trabajamos con soporte offshore ni tercerizado.

---

## 5. Criterios de SEO y posicionamiento en IA

Puntos técnicos que deben verificarse antes del lanzamiento. El prototipo ya tiene algunos implementados correctamente — se señala el estado de cada uno.

| Ítem | Estado | Acción requerida |
|---|---|---|
| Schema Organization (nombre, teléfono, países) | ✅ Presente | Verificar que incluya `areaServed`: Argentina, Chile, LATAM. |
| Schema Service por solución | ⚠️ Revisar | Crear un bloque Service para cada una de las 4 soluciones. |
| Schema FAQPage | ✅ Presente en VoiceBot | Replicar en las otras 3 secciones de solución. |
| Meta description única por página/sección | ⚠️ Ajustar | Usar los textos de la Sección 4 de este documento. |
| H1 único y orientado a búsqueda | ❌ Cambiar | Reemplazar por el texto propuesto en Sección 4.2. |
| Geolocalización explícita en texto visible | ⚠️ Reforzar | Mencionar "Argentina" y "LATAM" en el primer párrafo de cada sección. |
| Copyright actualizado a 2026 | ❌ Pendiente | Cambiar en el footer. |
| Velocidad y mobile | ✅ OK | Mantener la optimización actual. |
| Sitemap XML actualizado | 🔲 Verificar | Asegurarse de que incluya las nuevas secciones/subpáginas al publicar. |
