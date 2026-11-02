function Hero({ pelicula }) {
  return (
    <section className="hero" id="destacada">
      <img className="hero__img" src={pelicula.imagen} alt={`Cartel de ${pelicula.titulo}`} />
      <div className="hero__contenido">
        <p className="hero__etiqueta">Película destacada</p>
        <h2 className="hero__titulo">{pelicula.titulo}</h2>
        <p className="hero__meta">
          <span className="hero__valoracion">{pelicula.valoracion.toFixed(1)} ⭐</span>
          <span className="hero__clasificacion">{pelicula.clasificacion}</span>
        </p>
        <p className="hero__sinopsis">{pelicula.sinopsis}</p>
        <p className="hero__horarios">Funciones: {pelicula.horarios.join(' · ')}</p>
      </div>
    </section>
  )
}

export default Hero
