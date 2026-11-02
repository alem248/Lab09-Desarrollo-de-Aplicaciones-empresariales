# Evidencias — Lab 09 CineMax

Guía para tomar las 5 capturas de la práctica. La aplicación debe estar corriendo en
`http://localhost:5173` antes de empezar.

```bash
npm run dev
```

> Consejo: usa una ventana de navegador de **1280×800** o más ancha para que la
> cartelera se muestre en 3-4 columnas. Desarrollador (`F12`) abierto en la pestaña
> **Console** para las capturas 4 y 5.

---

## 1. Pantalla completa de la aplicación funcional

**Qué capturar:** la ventana del navegador completa con `http://localhost:5173`.

Debe verse:

- Header con el logo **CineMax** y la navegación (Cartelera, Horarios, Contacto).
- Hero destacando **Sombras del Alba** con su imagen y sinopsis.
- La cartelera completa: **9 películas** con cartel, título, valoración y horarios.
- Footer con contacto e información.

**Cómo:** Ctrl + Shift + S (o la herramienta de captura del sistema), capturando
toda la ventana. Guárdala como `01-pantalla-completa.png`.

---

## 2. Close-up del componente Hero

**Qué capturar:** solo la franja superior con la película destacada.

Debe verse: la imagen del póster, el título **Sombras del Alba** y su sinopsis.
Demuestra que la película pasada por props (`featuredMovie={movies[0]}`) se
renderiza correctamente.

**Cómo:** captura solo la región del hero. En la consola puedes verificarlo con:

```js
document.querySelector('.hero').textContent
```

Guárdala como `02-hero.png`.

---

## 3. Close-up de varias MovieCard

**Qué capturar:** dos o tres tarjetas de la cartelera, por ejemplo **Rumbo a Orión**.

Debe verse en cada tarjeta:

- Imagen del póster
- Título (`Rumbo a Orión`)
- Valoración (`4.6 ⭐`)
- Horarios (`14:00`, `17:00`, `20:00`)

**Cómo:** captura solo el bloque de tarjetas. Verificación en consola:

```js
[...document.querySelectorAll('.movie-card')].slice(1, 3).map(c => c.innerText)
```

Guárdala como `03-moviecards.png`.

---

## 4. Consola del navegador sin errores

**Qué capturar:** la pestaña **Console** de las herramientas de desarrollo (F12)
abierta en `http://localhost:5173`.

Debe verse **sin errores ni advertencias rojas de React**. Solo aparece el mensaje
informativo:

```
%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools
```

**Cómo:** abre F12 → pestaña Console → recarga con Ctrl + Shift + R → captura la
consola. Para forzar un error recuerda los practicados (ver
[errores-react.md](../errores-react.md)).

Guárdala como `04-consola-limpia.png`.

---

## 5. La estructura de commits en Git

**Qué capturar:** el historial de commits que muestra el trabajo del equipo.

**Cómo:** ejecuta en la carpeta del proyecto:

```bash
git log --oneline --graph --all
```

Y captura la terminal. Deben verse los commits de la práctica (`chore`, `refactor`,
`feat`, `docs`, `merge`).

Guárdala como `05-commits.png`.

---

## Entrega

Coloca las cinco imágenes en esta carpeta (`evidencias/`) junto con el recorte de
la interfaz en componentes y súbelas con el repositorio:

```bash
git add evidencias/
git commit -m "docs: agregar capturas de evidencias"
git push origin main
```
