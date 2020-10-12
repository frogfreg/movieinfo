import React from "react"
import "./movieDetail.css"
function MovieDetail({ fullMovieInfo }) {
  return (
    <main className="main">
      <div className="poster">
        <img src={fullMovieInfo.Poster} alt="movie poster" />
      </div>
      <div className="details">
        <h2 className="title">
          {fullMovieInfo.Title}{" "}
          <span className="year">({fullMovieInfo.Year})</span>{" "}
        </h2>
        <p>{fullMovieInfo.Runtime}</p>
        <p>Directed by {fullMovieInfo.Director}</p>
        <p>Genre: {fullMovieInfo.Genre}</p>
        <section className="ratings">
          <ul>
            {fullMovieInfo.Ratings.map(rating => {
              return (
                <li key={rating.Source}>
                  <h3>
                    <strong>
                      {rating.Source} - {rating.Value}
                    </strong>
                  </h3>
                </li>
              )
            })}
          </ul>
        </section>
        {fullMovieInfo.Awards === "N/A" ? null : <p>{fullMovieInfo.Awards}</p>}
      </div>
    </main>
  )
}

export default MovieDetail
