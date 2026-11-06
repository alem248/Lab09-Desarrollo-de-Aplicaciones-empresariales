import { useEffect, useRef, useState } from 'react'
import movies from './data/movies'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MovieList from './components/MovieList/MovieList'
import Footer from './components/Footer/Footer'

const RETARDO = 300 // ms que espera antes de filtrar

function App() {
  // Paso 4: lista de favoritas. Vive en App porque MovieCard (nieto) la pinta
  // y MovieList (hijo) la recorre: se eleva al ancestro común.
  const [favorites, setFavorites] = useState([])

  // Paso 6: texto del buscador. Vive en App porque lo escribe Hero (banner)
  // y lo lee MovieList para filtrar: estado elevado al ancestro común.
  const [query, setQuery] = useState('')

  // Paso 7: copia con retardo del texto. Es la que realmente usa el filtro,
  // así cada pulsación solo repinta el input y no recorre la cartelera.
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    console.info(`[MovieSearch] pulsación → "${query}"`)

    timerRef.current = setTimeout(() => {
      console.info(`[Filtro] se aplica con "${query}"`)
      setDebouncedQuery(query)
    }, RETARDO)

    return () => clearTimeout(timerRef.current)
  }, [query])

  const toggleFavorite = (movieId) => {
    setFavorites((current) =>
      current.includes(movieId)
        ? current.filter((id) => id !== movieId)
        : [...current, movieId],
    )
  }

  // Limpiar no debe esperar al retardo: borra el texto y el resultado al instante.
  const clearQuery = () => {
    clearTimeout(timerRef.current)
    setQuery('')
    setDebouncedQuery('')
  }

  // Llamada a la acción del banner: no espera al retardo y filtra ya mismo.
  const applySearchNow = () => {
    clearTimeout(timerRef.current)
    setDebouncedQuery(query)
  }

  return (
    <>
      <Header />
      <main className="main container">
        <Hero
          featuredMovie={movies[0]}
          query={query}
          onQueryChange={setQuery}
          onSearch={applySearchNow}
        />
        <MovieList
          movies={movies}
          query={debouncedQuery}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onClearQuery={clearQuery}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
