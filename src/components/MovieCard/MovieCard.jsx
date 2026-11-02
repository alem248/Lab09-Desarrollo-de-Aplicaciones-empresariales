function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.imagen}
        alt={movie.titulo}
        className="movie-card__image"
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.titulo}</h3>
        <div className="movie-card__rating">
          {movie.valoracion} ⭐
        </div>
        <p className="movie-card__horarios">
          {movie.horarios.map((horario) => (
            <span key={horario} className="movie-card__horario">
              {horario}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default MovieCard