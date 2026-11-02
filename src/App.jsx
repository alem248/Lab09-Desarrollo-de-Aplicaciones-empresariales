import movies from './data/movies'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MovieList from './components/MovieList/MovieList'
import Footer from './components/Footer/Footer'

function App() {
  const destacada = movies[0]

  return (
    <>
      <Header />
      <main className="main container">
        <Hero pelicula={destacada} />
        <section id="cartelera">
          <h1 className="main__titulo">Cartelera</h1>
          <MovieList peliculas={movies} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
