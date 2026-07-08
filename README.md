# GrupoCESA Web (GCSweb)

Bienvenido al repositorio de la página web de GrupoCESA. Este proyecto es un sitio web estático optimizado, desarrollado con HTML, CSS (Vanilla) y JavaScript.

## 🚀 Cómo levantar el proyecto localmente

Para visualizar y desarrollar la web en tu computadora de forma correcta, necesitas configurar las variables de entorno y usar un servidor local (ya que usar `file://` en el navegador puede causar problemas con rutas relativas y CORS).

### Paso 1: Configurar Variables de Entorno

El proyecto usa un script para generar la configuración del frontend a partir de un archivo `.env`.

1. Abre el archivo `.env` en la raíz del proyecto. Si no existe, puedes crearlo copiando las variables base.
2. Asegúrate de tener Node.js instalado en tu sistema.
3. Compila las variables de entorno ejecutando en tu terminal:

   ```bash
   node build-env.js
   ```

   > Esto generará automáticamente un archivo `env-config.js` que el HTML se encarga de leer. **Debes ejecutar este comando cada vez que modifiques el `.env`.**

### Paso 2: Iniciar un Servidor Local

Puedes levantar la web utilizando Node.js o Python. Abre la terminal en la raíz de este proyecto y elige uno de los siguientes métodos:

#### Opción A: Usando Node.js (Recomendado si usas `npx`)
```bash
npx serve
```
O usando `http-server`:
```bash
npx http-server -c-1
```
*(El sitio estará disponible normalmente en `http://localhost:3000` o `http://localhost:8080`)*

#### Opción B: Usando Python
Si prefieres usar Python (versión 3.x), puedes ejecutar:
```bash
python -m http.server 8000
```
*(El sitio estará disponible en `http://localhost:8000`)*

#### Opción C: Extensión "Live Server" (Visual Studio Code)
Si utilizas VS Code, la forma más sencilla es instalar la extensión **Live Server**. Una vez instalada, simplemente abre `index.html` y haz clic en el botón "Go Live" en la barra inferior del editor.

---

### 📂 Estructura Principal
- `index.html`: Página principal.
- `voicebot-aris.html`: Landing page del voicebot.
- `blog/`: Artículos y contenido del blog.
- `legal/`: Políticas de privacidad, cookies y términos.
- `styles.css`: Hoja de estilos principal.
- `build-env.js`: Script de construcción de variables de entorno.
- `.env`: Archivo de configuración (NO subir secretos aquí).