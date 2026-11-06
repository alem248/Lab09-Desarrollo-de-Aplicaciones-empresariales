# CineMax — Lab 09

Aplicación de cartelera de cine construida con **React 19 + Vite 8**.

## Requisitos

- Node.js v24.20.0 (o superior)
- npm 11.19.0

## Puesta en marcha

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # build de producción en dist/
npm run lint    # lint con oxlint
```

## Estructura

```
src/
├── components/          # componentes de la interfaz
│   ├── Button/Button.jsx             # botón reutilizable (children + variant)
│   ├── Header/Header.jsx
│   ├── Hero/Hero.jsx                 # banner + buscador con su CTA
│   ├── MovieSearch/MovieSearch.jsx   # entrada controlada
│   ├── MovieCard/MovieCard.jsx       # tarjeta + botón de favorita
│   ├── MovieList/MovieList.jsx       # filtrado + estado vacío
│   └── Footer/Footer.jsx
├── data/                # datos de la aplicación
│   ├── cinema.js        # datos generales del cine
│   └── movies.js        # cartelera (9 películas)
├── styles/              # arquitectura CSS
│   ├── base/            # variables, reset, tipografía, formularios, utilidades
│   ├── layout/          # contenedor y disposición general
│   ├── components/      # estilos de cada componente
│   └── main.css         # punto de entrada (ordena los imports)
├── App.jsx              # composición + estado (favoritas y búsqueda)
└── main.jsx             # montaje de React en el DOM
```

## Componentes

| Componente     | Responsabilidad                                                             |
| -------------- | --------------------------------------------------------------------------- |
| `Button`       | Botón reutilizable: contenido por `children` y aspecto por la prop `variant` (`primary`, `secondary`, `ghost`, `favorite`). |
| `Header`       | Logo del cine y navegación, leyendo los enlaces de `cinema.js`.              |
| `Hero`         | Banner de la película destacada (`featuredMovie`) con el buscador y su CTA *Buscar*. |
| `MovieSearch`  | Entrada controlada: el texto vive en el estado y `onChange` lo actualiza.     |
| `MovieCard`    | Tarjeta individual (imagen, título, valoración, horarios) con el botón de favorita. |
| `MovieList`    | Filtra la cartelera por el texto, dibuja una `MovieCard` por película con `key={movie.id}` y muestra el estado vacío. |
| `Footer`       | Datos de contacto e información general del cine.                            |

## Estado y persistencia

El estado (favoritas y búsqueda) vive en `App`, el ancestro común de los componentes
que lo usan, y las favoritas se guardan en `localStorage`. El detalle de **cada dato,
en qué componente está y por qué** está en
[estado-y-persistencia.md](./estado-y-persistencia.md).

## Notas de la práctica

- Las películas se pasan por props desde `src/data/movies.js`; ningún componente tiene los datos hardcodeados.
- `MovieList` usa `key={movie.id}` para que React identifique cada tarjeta.
- El filtrado ignora mayúsculas y acentos (`orion` encuentra «Rumbo a Orión») y aplica un retardo de 300 ms para no filtrar con cada letra.
- Los errores típicos practicados (`class`, dos nodos raíz y `key` faltante) están documentados en [errores-react.md](./errores-react.md).
- Las capturas de evidencias están en [evidencias/](./evidencias/).
