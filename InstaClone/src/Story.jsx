import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Story() {

  const[stories,setStories]=useState([])

  const navigate =useNavigate()

  let tot=0;

  useEffect(()=>
    {
      fetch('http://localhost:3000/Story').then((res)=>{
        return res.json()
      }).then((data)=>{
        setStories(data)
      }).catch((err)=>{
        console.log(err)
      })
    })

    tot=stories.length
  return (
    <div className='story'> 
    {stories.length>0 ?(
      <div className='d-flex'>
          {stories.map((stori)=>(
            <div key={stori.id} className='mx-1'style={{ cursor: 'pointer' }} onClick={()=>{navigate(`/Story/${stori.id}/${tot}`)}}>
              <div className='story-border'>
                <img src={stori.user.profile_pic} alt="profile" className='story-dp rounded-circle '/>
              </div>
               
               <p className='text-truncate' style={{width:"75px"}}>{stori.user.username}</p>
            </div>
          ))}
      </div>
    ):(
      <p>
        Loading...
      </p>
    )
    }
    </div>
  )
}

export default Story