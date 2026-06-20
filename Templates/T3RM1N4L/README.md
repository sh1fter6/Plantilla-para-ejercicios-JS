# Plantilla de Consola Interactiva para Ejercicios JS

Esta plantilla te permite crear una serie de ejercicios o retos en JavaScript y ejecutarlos en pantalla sin necesidad de configurar manualmente un selector o usar la consola nativa del navegador (F12).

## ¿Cómo utilizar esta plantilla?

1. **Copia los archivos de la plantilla:**
   Copia los siguientes archivos a tu nueva carpeta de ejercicios:
   * `index.html`
   * `index.js`
   * `styles.css`
   * `styles.scss` (opcional, si quieres usar SASS)

2. **Crea tus archivos JavaScript de ejercicios:**
   Simplemente crea archivos `.js` en la misma carpeta. La plantilla los detectará automáticamente (excluyendo `index.js`).
   Por ejemplo:
   * `ejercicio-1.js`
   * `ejercicio-2.js`
   * `desafio-final.js`

3. **Usa `console.log` normalmente:**
   Escribe tu código de JS usando `console.log()` común y corriente. Los logs se interceptarán y aparecerán de inmediato en la consola de pantalla.

4. **Agrega estilos de color (opcional):**
   Puedes imprimir texto en color verde brillante usando la sintaxis `%c`:
   ```javascript
   console.log("%c¡Misión cumplida!", "color: #00ff00; font-weight: bold;");
   ```

5. **Levanta tu servidor local:**
   Abre la carpeta en tu editor y lánzala con una extensión de servidor local como **Live Server** de VS Code.
   * *Nota:* La autodetectación de archivos requiere que el proyecto sea servido localmente a través de HTTP (como hace Live Server) para poder escanear la estructura de la carpeta.
