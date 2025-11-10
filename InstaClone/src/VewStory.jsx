import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function VewStory() {

    const {id,tot} =useParams()

    const[story,setStory]=useState(null)

    const navigate=useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3000/Story/${id}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setStory(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[id])

    if(id>tot || id<1){
        navigate('/')
    }

  return (
    <div>
       {story ? <div className='d-flex justify-content-center align-items-center'>
                    <Link to={`http://localhost:5173/Story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
                    <img className='vh-100' src={story.image.url} alt="story" />
                    <Link to={`http://localhost:5173/Story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
               </div>:
       <p>Loading...</p>}
    </div>
  )
}

export default VewStory