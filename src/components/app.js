import React, { useState, useEffect } from "react"
import Header from "./header"
import MovieContainer from "./movieContainer"
import axios from "axios"
import "./app.css"
import MovieDetail from "./movieDetail"

function App() {
  const [movieList, setMovieList] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [fullMovieInfo, setfullMovieInfo] = useState(null)

  useEffect(() => {
    setSelectedMovie(null)
    setfullMovieInfo(null)
  }, [movieList])
  useEffect(() => {
    const getCompleteInfo = async () => {
      if (selectedMovie) {
        const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            apikey: "2f075259",
            i: selectedMovie.imdbID,
          },
        })
        setfullMovieInfo(response.data)
      }
    }
    getCompleteInfo()
  }, [selectedMovie])

  const fetchMovies = async searchTerm => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "2f075259",
        s: searchTerm,
      },
    })
    setMovieList(response.data.Search)
  }
  return (
    <div className="container">
      <Header fetchMovies={fetchMovies} />

      {fullMovieInfo ? (
        <MovieDetail fullMovieInfo={fullMovieInfo} />
      ) : (
        <MovieContainer
          movieList={movieList}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </div>
  )
}

export default App
