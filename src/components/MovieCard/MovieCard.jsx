function MovieCard({ pelicula }) {
  return (
    <article className="movie-card">
      <img className="movie-card__img" src={pelicula.imagen} alt={`Cartel de ${pelicula.titulo}`} />
      <div className="movie-card__cuerpo">
        <h3 className="movie-card__titulo">{pelicula.titulo}</h3>
        <p className="movie-card__meta">
          <span className="movie-card__valoracion">{pelicula.valoracion.toFixed(1)} ⭐</span>
          <span className="movie-card__clasificacion">{pelicula.clasificacion}</span>
        </p>
        <p className="movie-card__sinopsis">{pelicula.sinopsis}</p>
        <ul className="movie-card__horarios">
          {pelicula.horarios.map((hora) => (
            <li key={hora}>{hora}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default MovieCard
