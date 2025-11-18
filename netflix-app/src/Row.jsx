import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({ title, fetchurl, isLarge }) {

  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios.get(fetchurl).then((res) => {
      setMovie(res.data.results);
      console.log(res.data)
    });


  }, [fetchurl]);

   const handleClick = (mov) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(mov?.name || mov?.title ||movie.original_name|| "")
        .then((urls) => {
          const urlParams = new URLSearchParams(new URL(urls).search);
          setTrailerUrl(urlParams.get("v"));  // FIXED
        })
        .catch((error) => console.log(error));
    }
  }; 

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }; 

  return (
    <div className='whole_row'>
      <h2 className='row_title'>{title}</h2>

      <div className="row_poster">
        {movie.map((mov) => (
          <img onClick={()=>handleClick(mov)}
           className={`row_movie ${isLarge && "row_posters"}`}
            key={mov.id}
            src={`${base_url}${isLarge ? mov.poster_path : mov.backdrop_path}`}
            alt={mov.name}
          />
        ))}
      </div>

       

       {trailerUrl && (
  <div className="youtube_container">
    <YouTube videoId={trailerUrl} opts={opts} />
  </div>
)} 
    </div>
  );
}

export default Row;
