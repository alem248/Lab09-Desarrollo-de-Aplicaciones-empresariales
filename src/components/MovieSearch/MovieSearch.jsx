function MovieSearch({ value, onChange }) {
  return (
    <div className="movie-search">
      <label className="movie-search__label" htmlFor="buscar-pelicula">
        Buscar película
      </label>
      <input
        id="buscar-pelicula"
        className="movie-search__input"
        type="search"
        placeholder="Título o sinopsis…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default MovieSearch
