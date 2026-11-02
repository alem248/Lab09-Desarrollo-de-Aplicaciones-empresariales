import MovieCard from '../MovieCard/MovieCard'

function MovieList({ peliculas }) {
  return (
    <div className="movie-list">
      {peliculas.map((pelicula) => (
        <MovieCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  )
}

export default MovieList
