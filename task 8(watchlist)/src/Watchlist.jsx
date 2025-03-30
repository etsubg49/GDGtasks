import React from "react";

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className="app">
      <h1 className="title">Your Watchlist</h1>
      <ul className="movieList">
        {watchlist.map((movie) => (
          <li key={movie.id} className="movieItem">
            <h3 className="title">{movie.title}</h3>
            <img
              className="moviePoster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <button onClick={() => removeFromWatchlist(movie.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
