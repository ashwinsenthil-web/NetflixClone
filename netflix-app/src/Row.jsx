import axios from 'axios'
import React, { useState,useEffect } from 'react'
import './Row.css'

function Row({title,url,isLarge}) {

    const[movie,setMovie]=useState([])

    const base_url="https://image.tmdb.org/t/p/original"

    useEffect(()=>{
        axios.get(url).
        then((res)=>{
            setMovie(res.data.results)
        })
    },[])
  return (
    <div className='whole_row'>
       <h2 className='row_title'>{title}</h2>
       <div className="row_poster" >
        {movie.map((mov)=>(
            
        <img className={`row_movie ${isLarge && "row_posters"}`} key={mov.id} src={`${base_url}${isLarge?mov.poster_path:mov.backdrop_path}`} alt="" />
       ))}
    </div>
       </div>
       
   
  )
}

export default Row