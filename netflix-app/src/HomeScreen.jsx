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
        <Row title='NETFLIX ORIGINALS' url={request.originals} isLarge={true}/>
        <Row title='Top Rated' url={request.top_rated} isLarge={false} /> 
        <Row title='Upcoming' url={request.upcoming} isLarge={false}/> 
        <Row title='Tv Series' url={request.tv} isLarge={false}/>
         
        
        <Row title='Now Playing' url={request.now_playing} isLarge={false}/>
        <Row title='Popular' url={request.popular} isLarge={false}/>          
    </div>
  )
}

export default HomeScreen