import MovieCard from '../MovieCard/MovieCard'
import movies from '../../data/movies'

function MovieList({ movies: moviesProp }) {
  return (
    <ul className="movie-list">
      {moviesProp.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  )
}

export default MovieList