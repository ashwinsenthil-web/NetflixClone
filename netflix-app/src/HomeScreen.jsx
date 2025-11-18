import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import request from './Request'
import './App.css'

function HomeScreen() {
  return (
    <div>
        <Nav/>
        
        <Banner/> 
        <Row title='NETFLIX ORIGINALS' fetchurl={request.originals} isLarge={true}/>
        <Row title='Top Rated' fetchurl={request.top_rated} isLarge={false} /> 
        <Row title='Upcoming' fetchurl={request.upcoming} isLarge={false}/> 
        <Row title='Tv Series' fetchurl={request.tv} isLarge={false}/>
         
        
        <Row title='Now Playing' fetchurl={request.now_playing} isLarge={false}/>
        <Row title='Popular' fetchurl={request.popular} isLarge={false}/>          
    </div>
  )
}

export default HomeScreen