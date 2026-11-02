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
│   ├── Header/Header.jsx
│   ├── Hero/Hero.jsx
│   ├── MovieCard/MovieCard.jsx
│   ├── MovieList/MovieList.jsx
│   └── Footer/Footer.jsx
├── data/                # datos de la aplicación
│   ├── cinema.js        # datos generales del cine
│   └── movies.js        # cartelera (9 películas)
├── styles/              # arquitectura CSS
│   ├── base/            # variables, reset, tipografía
│   ├── layout/          # contenedor y disposición general
│   ├── components/      # estilos de cada componente
│   └── main.css         # punto de entrada (ordena los imports)
├── App.jsx              # composición de la aplicación
└── main.jsx             # montaje de React en el DOM
```

## Componentes

| Componente  | Responsabilidad                                                              |
| ----------- | ---------------------------------------------------------------------------- |
| `Header`    | Logo del cine y navegación, leyendo los enlaces de `cinema.js`.               |
| `Hero`      | Banner de la película destacada. Recibe la película por props (`pelicula`).   |
| `MovieCard` | Tarjeta individual: imagen, título, valoración, clasificación y horarios.     |
| `MovieList` | Recorre la cartelera con `map` y dibuja una `MovieCard` por película.         |
| `Footer`    | Datos de contacto e información general del cine.                            |

## Notas de la práctica

- Las películas se pasan por props desde `src/data/movies.js`; ningún componente tiene los datos hardcodeados.
- `MovieList` usa `key={pelicula.id}` para que React identifique cada tarjeta.
- Los errores típicos practicados (`class`, dos nodos raíz y `key` faltante) están documentados en [errores-react.md](./errores-react.md).
