import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRateMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRateurl = `${moviesURL}top_rated?${apiKey}`

    getTopRateMovies(topRateurl)
  }, [])
  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  )
}

export default Home