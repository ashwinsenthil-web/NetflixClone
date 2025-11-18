import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import request from './Request';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Banner() {

  const[movie,setMovie]=useState([])
 /*  const [trailerUrl, setTrailerUrl] = useState(""); */

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '. . . .': string;
    }

  useEffect(()=>{
  

     axios.get(request.tv).
   then((res)=>{
       setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
   })
  
  
   
    
  },[])

  /* const handleClick = (mov) => {
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
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    }; 
     */

   

  return (
    <div>
        <header className='banner' style={{
         
    backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
   
  backgroundrepeat: "no-repeat"
    
   }}>
    {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}  */}
      
      <div className='bannerElts'>
        <div className="banner-name">
       {movie.original_name || movie.name}
    </div>

    <div className="banner-btns">
       <button  className='banner-btn'>Play</button>
       <button className='banner-btn'>My List</button>
    </div>

    <div className="banner-description ">
        <p>{truncate(`${movie.overview}`,200)}</p>
    </div>
      </div>
    

   </header>
    </div>
   
  )
}

export default Banner