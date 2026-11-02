import movies from './data/movies'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MovieList from './components/MovieList/MovieList'

function App() {
  return (
    <>
      <Header />
      <main className="main container">
        <Hero featuredMovie={movies[0]} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </>
  )
}

export default App