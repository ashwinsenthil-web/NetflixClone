import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import request from './Request';

function Banner() {

  const[movie,setMovie]=useState([])

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '. . . .': string;
    }

  useEffect(()=>{
   /* fetch(request.originals).
   then((res)=>{return res.json()}).
   then((data)=>{setMovie(data.results[1])}).
   catch((err)=>{console.log(err)}) */

   axios.get(request.tv).
   then((res)=>{
       setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
   })
    
  },[])

   console.log(movie) 
    

   

  return (
    <div>
        <header className='banner' style={{
         
    backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
   
  backgroundrepeat: "no-repeat"
    
   }}>
      
      <div className='bannerElts'>
        <div className="banner-name">
       {movie.original_name || movie.name}
    </div>

    <div className="banner-btns">
       <button className='banner-btn'>Play</button>
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