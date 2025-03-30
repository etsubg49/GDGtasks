import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Watchlist from "./Watchlist";


function App() {
const Key='5858f09e1c16b6975eb06a2cff54de7a';
const API = 'https://api.themoviedb.org/3';
const IMAGE= 'https://image.tmdb.org/t/p/w500'; 
const [video,setVideo]=useState([]);
const [loading, setLoading] = useState(true);
const [watchlist, setWatchlist] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const answer = await axios.get(`${API}/movie/popular`, {
        params: { api_key: Key },
      });
      setVideo(answer.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Stop loading even if there's an error
    }
  };
fetchData();
  }, []); 

     const addToWatchlist = (movie) => {
       if (watchlist.find((item) => item.id === movie.id)) {
         alert(`${movie.title} is already in your watchlist!`);
         return;
       }

       setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
       alert(`${movie.title} has been added to your watchlist.`);
     };

     const removeFromWatchlist = (id) => {
       setWatchlist((prevWatchlist) =>
         prevWatchlist.filter((movie) => movie.id !== id)
       );
       alert(`Movie has been removed from your watchlist.`);
     };



  if (loading) return <div>Loading...</div>;



  return (
    <div className="app">
      <h1 className="title">Popular Movies</h1>
      <ul className="movieList">
        {video.map((item) => (
          <li key={item.id} className="movieItem">
            <h3 className="title">{item.title}</h3>
            <img className="moviePoster" src={`${IMAGE}${item.poster_path}`} />
            <p>Release Date: {item.release_date}</p>
            <p>Rating: {item.vote_average}</p>
            <button
              className="watchlistButton"
              onClick={() => addToWatchlist(item)}
            >
              Add to Watchlist
            </button>
          </li>
        ))}
      </ul>
      <Watchlist
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist} 
      />
    </div>
  );
}

export default App;


