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

**Archivo:** `01-pantalla-completa.jpg`

La ventana completa con `http://localhost:5173`:

- Header con el logo **CineMax** y la navegación (Cartelera, Horarios, Contacto).
- Hero destacando **Sombras del Alba** con su imagen y sinopsis.
- La cartelera completa: **9 películas** con cartel, título, valoración y horarios.
- Footer con contacto e información.

---

## 2. Close-up del componente Hero

**Archivo:** `02-hero.png`

Solo la franja superior con la película destacada: imagen del póster, título
**Sombras del Alba** y su sinopsis. Demuestra que la película pasada por props
(`featuredMovie={movies[0]}`) se renderiza correctamente.

Verificación en consola:

```js
document.querySelector('.hero').textContent
```

---

## 3. Close-up de varias MovieCard

**Archivo:** `03-moviecards.png`

Dos tarjetas (**Sombras del Alba** y **Rumbo a Orión**) viéndose cada una con:

- Imagen del póster
- Título (`Rumbo a Orión`)
- Valoración (`4.6 ⭐`)
- Horarios (`14:00`, `17:00`, `20:00`)

Verificación en consola:

```js
[...document.querySelectorAll('.movie-card')].slice(1, 3).map(c => c.innerText)
```

---

## 4. Consola del navegador sin errores

**Archivos:** `04-consola-sin-errores.png` (imagen) y
`evidencia-4-consola.html` (fuente, se puede reabrir en el navegador).

La consola muestra **cero errores y cero advertencias**. El único mensaje es el
informativo propio de React en modo desarrollo:

```
Download the React DevTools for a better development experience:
https://react.dev/link/react-devtools
```

Los mensajes se leyeron de la consola real de la pestaña con DevTools y se
renderizaron en un panel con la apariencia de la pestaña Console, porque la
herramienta de captura no puede abrir DevTools por sí sola. Para reproducirlo a
mano: F12 → pestaña **Console** → Ctrl + Shift + R en `http://localhost:5173`.

---

## 5. La estructura de commits en Git

**Archivos:** `05-commits.png` (imagen) y `evidencia-5-commits.html` (fuente).

Resultado real de `git log --oneline --graph --all`, con los commits de la
práctica (`chore`, `refactor`, `feat`, `docs`) y el merge que integra el aporte
del equipo (`6f2c82a` → `b82c490`).

---

## Entrega

Las cinco imágenes están en esta carpeta (`evidencias/`) junto con las fuentes
HTML de las evidencias 4 y 5 y el recorte de la interfaz en componentes. Se
subieron con el repositorio:

```bash
git add evidencias/
git commit -m "docs: agregar capturas de evidencias"
git push origin main
```

