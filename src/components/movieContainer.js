import React from "react";
import "./movieContainer.css";

function MovieContainer({ movieList, setSelectedMovie }) {
  return (
    <main className="container-main">
      {movieList ? (
        <ul className="movie-list">
          {movieList.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <div className="movie-card">
                  <button
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setSelectedMovie(movie);
                      }
                    }}
                    onClick={() => {
                      setSelectedMovie(movie);
                    }}
                  >
                    <figure>
                      <img
                        className="movie-thumbnail"
                        src={movie.Poster}
                        alt="movie poster"
                      />
                      <figcaption
                        className="caption"
                        style={{ textAlign: "center" }}
                      >
                        {movie.Title}
                      </figcaption>
                    </figure>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 style={{ textAlign: "center" }}>No results</h3>
      )}
    </main>
  );
}

export default MovieContainer;
