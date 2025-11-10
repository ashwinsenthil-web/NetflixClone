import React from 'react'
import Post from './Post'
import Story from './Story'

function Feed() {
  return (
    <div>
       <div className='story'><Story/></div>
       <div><Post/></div>
    </div>
    
    
  )
}

export default Feed