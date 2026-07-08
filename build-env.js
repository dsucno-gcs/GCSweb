const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const outputPath = path.join(__dirname, 'env-config.js');

try {
  // Verificar si existe el archivo .env
  if (!fs.existsSync(envPath)) {
    console.log('No se encontro el archivo .env, creando uno vacio...');
    fs.writeFileSync(envPath, '');
  }

  const envFile = fs.readFileSync(envPath, 'utf8');
  const lines = envFile.split('\n');
  const envObj = {};

  lines.forEach(line => {
    // Ignorar comentarios y lineas vacias
    if (line.trim() && !line.trim().startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key) {
        const value = valueParts.join('=').trim().replace(/^['"]|['"]$/g, ''); // Quitar comillas si las hay
        envObj[key.trim()] = value;
      }
    }
  });

  // Generar el archivo Javascript que expone las variables en window.ENV
  const outputContent = `// Archivo autogenerado por build-env.js\n// IMPORTANTE: NO EDITES ESTE ARCHIVO MANUALMENTE.\nwindow.ENV = ${JSON.stringify(envObj, null, 2)};\n`;
  fs.writeFileSync(outputPath, outputContent);
  console.log('env-config.js generado exitosamente. Listo para ser usado en el HTML.');

} catch (error) {
  console.error('Error al generar env-config.js:', error);
}
