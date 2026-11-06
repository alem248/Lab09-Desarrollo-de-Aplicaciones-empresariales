# Estado y persistencia (paso 11)

Para cada dato que la aplicación recuerda se indica **en qué componente se decidió
ponerlo** y **por qué**. La regla común es *elevar el estado al ancestro común* de
los componentes que lo necesitan, siguiendo el flujo de datos unidireccional de React.

---

## 1. Lista de favoritas — `favorites`

- **Componente:** `App` (`src/App.jsx`), con `useState`.
- **Por qué ahí:** la lista la pinta `MovieCard` (nieto) y la recorre `MovieList`
  (hijo). `App` es su **ancestro común**, así que el estado se eleva para que ambos
  la lean a través de props (`favorites`, `onToggleFavorite`).
- **Cómo cambia:** la función `toggleFavorite(movieId)` agrega o quita el id de la
  lista; se pasa por props hasta el botón de favorita de cada tarjeta.
- **Persistencia (paso 10):** se guarda en `localStorage` con la clave
  `cinemax:favoritas`.
  - Se **lee** con un inicializador perezoso `useState(cargarFavoritas)`, solo al
    montar el componente, para que las favoritas **sobrevivan a una recarga**.
  - Se **escribe** en un `useEffect` que se dispara cada vez que `favorites` cambia.
  - `cargarFavoritas()` hace un `try/catch` y valida que el valor parseado sea un
    array: si no hay nada, si el almacenamiento está bloqueado o si el JSON está
    corrupto, devuelve `[]` y la app sigue funcionando.

## 2. Texto del buscador — `query`

- **Componente:** `App` (`src/App.jsx`), con `useState`.
- **Por qué ahí:** lo **escribe** `Hero` (el `MovieSearch` vive dentro del banner) y
  lo **lee** `MovieList` para filtrar la cartelera. Al estar en `App`, ancestro común
  de ambos, el mismo estado controla el input y el resultado.
- **Entrada controlada (paso 6):** `MovieSearch` recibe `value` y `onChange`; el
  texto vive en el estado y cada pulsación lo actualiza con `event.target.value`.

## 3. Texto con retardo — `debouncedQuery`

- **Componente:** `App` (`src/App.jsx`), con `useState`.
- **Por qué ahí:** es el valor que **realmente usa el filtro**. Vive junto a `query`
  porque se deriva de él mediante un `useEffect` con `setTimeout(…, 300)`.
- **Para qué (paso 7):** separar el texto que se pinta en el input del texto que
  filtra hace que **cada pulsación solo repinta el input** y no recorra la cartelera;
  el filtrado se aplica cuando el usuario deja de escribir (300 ms). La diferencia se
  comprueba en la consola: `[MovieSearch] pulsación → "…"` se registra en cada
  tecla, mientras que `[Filtro] se aplica con "…"` aparece una sola vez, con el
  retardo.

## 4. Temporizador del retardo — `timerRef`

- **Componente:** `App` (`src/App.jsx`), con `useRef`.
- **Por qué ahí y no en `useState`:** es solo una referencia al id del
  `setTimeout`. Una ref **persiste entre renderizados sin provocar repintados**, lo
  cual es justo lo que se necesita para poder cancelarlo.
- **Para qué:**
  - En la limpieza del `useEffect` (`clearTimeout`) evita que un temporizador
    huérfano escriba un estado viejo tras desmontar o cambiar de texto.
  - Permite que las acciones inmediatas lo cancelen: **`applySearchNow`** (CTA
    *Buscar* del banner) y **`clearQuery`** (botón *Limpiar búsqueda*) esperan el
    retardo y aplican el resultado al instante.

---

## Cuadro resumen

| Dato                          | Componente que lo guarda | Mecanismo              | Por qué ahí                                                              |
| ----------------------------- | ------------------------ | ---------------------- | ------------------------------------------------------------------------- |
| `favorites` (favoritas)       | `App`                    | `useState`             | Ancestro común de `MovieList` y `MovieCard`; se pinta y se recorre desde ahí. |
| `query` (texto del input)     | `App`                    | `useState`             | Ancestro común de `Hero` (escribe) y `MovieList` (filtra).                |
| `debouncedQuery` (a filtrar)  | `App`                    | `useState` + `useEffect` | Derivado de `query` con retardo; es el valor que usa el filtro.           |
| `timerRef` (id del timer)     | `App`                    | `useRef`               | Persiste sin repintar; permite cancelar el retardo (Buscar / Limpiar).     |
| Favoritas persistidas         | `localStorage`           | `useEffect` + initializer | Sobreviven a la recarga de la página (paso 10).                           |

---

## Captura del estado vacío del buscador (paso 8)

Cuando ninguna película coincide con el texto, `MovieList` dibuja el estado vacío
con un mensaje y el botón **Limpiar búsqueda** (variant `secondary` del componente
`Button`), en lugar de una lista vacía.

**Captura:** [`evidencias/06-estado-vacio-buscador.png`](./evidencias/06-estado-vacio-buscador.png)

Texto mostrado en la captura (búsqueda `zzz`):

```
No hay películas que coincidan con “zzz”.

[ Limpiar búsqueda ]
```

Verificación reproducible en la consola del navegador:

```js
// Escribir un texto sin coincidencias y comprobar el estado vacío
document.querySelector('.movie-search__input').value // → "zzz"
document.querySelector('.movie-list__empty').innerText
// → 'No hay películas que coincidan con “zzz”.\n\nLimpiar búsqueda'
document.querySelectorAll('.movie-card').length // → 0
```
