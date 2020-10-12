import React, { useState } from "react"
import { Link } from "gatsby"
import "./header.css"

function Header(props) {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <header className="container-header">
      <Link to="/" className="brand">
        <h3>Movie Info</h3>
      </Link>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (searchTerm) {
            props.fetchMovies(searchTerm)
          }
        }}
        className="header-form"
      >
        <input
          className="movie-search-input"
          type="text"
          placeholder="Search for a movie"
          onChange={event => {
            setSearchTerm(event.target.value)
          }}
          value={searchTerm}
        />
        <button className="search-button">Search</button>
      </form>
    </header>
  )
}

export default Header
