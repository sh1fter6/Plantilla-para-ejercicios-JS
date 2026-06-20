# 🧩 Plantillas para Ejercicios JS

Colección de plantillas visuales para hacer ejercicios de JavaScript de forma más cómoda, sin necesidad de usar la consola nativa del navegador (F12).

Cada carpeta es una plantilla independiente con su propio tema visual, creada por un colaborador diferente.

---

## 📁 Plantillas disponibles

| Carpeta | Autor | Descripción |
|---|---|---|
| [T3RM1N4L](./T3RM1N4L/) | sh1fter6 | Consola hacker estilo terminal. Fondo negro, letra verde, detección automática de archivos JS. |

---

## 🤝 ¿Cómo contribuir con tu propio tema?

1. **Haz un fork** de este repositorio.

2. **Copia la carpeta `T3RM1N4L`** y renómbrala con tu nombre o alias:
   ```
   TU-NOMBRE/
   ├── index.html
   ├── index.js
   ├── styles.scss   ← Aquí defines tu tema
   ├── styles.css    ← CSS compilado desde el SCSS
   ├── retos.json    ← Lista de archivos JS a cargar
   └── README.md
   ```

3. **Edita `styles.scss`** para personalizar tu tema. Las variables están al inicio del archivo y son todo lo que necesitas tocar para cambiar colores, tipografía y tamaños:
   ```scss
   $bg-color:           #121212;   // Fondo de página
   $terminal-bg:        #000000;   // Fondo de la consola
   $terminal-header-bg: #1a1a1a;   // Fondo del encabezado
   $green-primary:      #00ff00;   // Color principal (texto, bordes, hover)
   $text-muted:         #888888;   // Color del texto secundario
   $font-mono:          'Courier New', Courier, monospace;
   ```

> De todas formas, el codigo es libre de editarse como mas te guste. Esto es solo una sugerencia :3

4. **Compila el SCSS a CSS** antes de subir tus cambios:

   ```bash
   npx sass styles.scss styles.css --no-source-map
   ```

5. **Añade tus archivos `.js`** en la carpeta y lístalos en `retos.json`:

   ```json
   [
     "ejercicio-1.js",
     "ejercicio-2.js",
     "mi-reto.js"
   ]
   ```

   La plantilla los detectará automáticamente en ese orden.

6. **Añade una fila a la tabla de arriba** con tu nombre, carpeta y una descripción breve de tu tema.

7. **Abre un Pull Request** desde tu fork. ¡Listo!

---

## ⚡ ¿Cómo usar una plantilla?

1. Descarga o clona el repositorio.
2. Entra a la carpeta de la plantilla que quieras usar.
3. Crea tus archivos `.js` y añádelos a `retos.json` (ver formato en la sección de arriba).
4. Abre la carpeta con **Live Server** (extensión de VS Code) y listo.


---

> Espero que lo disfruten :D La idea es que entre todos podamos enriquecer la colección con distintos estilos y hacer que practicar JavaScript sea un poco más visual, dinámico y divertido.
