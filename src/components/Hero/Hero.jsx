function Hero({ featuredMovie }) {
  return (
    <section className="hero">
      <img
        src={featuredMovie.imagen}
        alt={featuredMovie.titulo}
        className="hero__image"
      />
      <div className="hero__content">
        <h2 className="hero__title">{featuredMovie.titulo}</h2>
        <p className="hero__synopsis">{featuredMovie.sinopsis}</p>
      </div>
    </section>
  )
}

export default Hero