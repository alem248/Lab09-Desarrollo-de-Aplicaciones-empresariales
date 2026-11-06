import MovieCard from '../MovieCard/MovieCard'
import Button from '../Button/Button'

function MovieList({ movies: moviesProp, query, favorites, onToggleFavorite, onClearQuery }) {
  const texto = query.trim().toLowerCase()
  const filtradas =
    texto === ''
      ? moviesProp
      : moviesProp.filter(
          (movie) =>
            quitarAcentos(movie.titulo).includes(quitarAcentos(texto)) ||
            quitarAcentos(movie.sinopsis).includes(quitarAcentos(texto)),
        )

  // Paso 8: estado vacío cuando ninguna película coincide con la búsqueda.
  if (filtradas.length === 0) {
    return (
      <div className="movie-list__empty">
        <p className="lead">
          No hay películas que coincidan con “{query}”.
        </p>
        <Button variant="secondary" onClick={onClearQuery}>
          Limpiar búsqueda
        </Button>
      </div>
    )
  }

  return (
    <ul className="movie-list">
      {filtradas.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  )
}

// Comparación sin distinguir mayúsculas ni acentos: "orion" encuentra "Orión".
// \p{M} son las marcas Unicode (acentos) que NFD separa de la letra.
function quitarAcentos(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
}

export default MovieList
