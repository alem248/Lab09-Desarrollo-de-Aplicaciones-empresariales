import Button from '../Button/Button'

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <img
        src={movie.imagen}
        alt={movie.titulo}
        className="movie-card__image"
      />
      <div className="movie-card__info">
        <div className="movie-card__header">
          <h3 className="movie-card__title">{movie.titulo}</h3>
          <Button
            variant={isFavorite ? 'favorite' : 'ghost'}
            className="movie-card__favorite"
            aria-pressed={isFavorite}
            aria-label={
              isFavorite
                ? `Quitar ${movie.titulo} de favoritas`
                : `Añadir ${movie.titulo} a favoritas`
            }
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? '★ Favorita' : '☆ Favorita'}
          </Button>
        </div>
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
