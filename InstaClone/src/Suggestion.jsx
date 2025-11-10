import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom'

function Suggestion() {

    const[profile,setProfile]=useState(null);
    const[suggestion,setSuggestion]=useState([]);
    const[followeduser,setFollowedUser]=useState({})
    const navigate=useNavigate()
    

    useEffect(()=>{
        fetch('http://localhost:3000/Profile').then((res)=>{
            return res.json()
        }).then((data)=>{
            setProfile(data);
        }).catch((error)=>{
            console.log(error);
        })

         fetch('http://localhost:3000/Suggestion').then((res)=>{
            return res.json()
        }).then((data)=>{
            setSuggestion(data);
        }).catch((error)=>{
            console.log(error);
        })
    })

    const handleFollow= async(id,username,profile_pic)=>{

        axios.post('http://localhost:3000/followers',{"id":id,"username":username,"profile_pic":profile_pic})
        
        .then(()=>{alert("you started following"+username)})
        .catch((err)=>{console.log(err)})

        setFollowedUser((prev) => ({
        ...prev,
        [id]: true,
      })); // ✅ Mark this user as followed
    

    }

  return (

    <div className='w-75  m-3 '>
        <div >
        {profile ?(
        <div className='d-flex mb-3'>
            <img onClick={()=>{navigate('/Profile')}}  className='rounded-circle  profPic'style={{ cursor: 'pointer' }} src={profile.profile_pic} alt="Profile" />
            <h6 style={{ cursor: 'pointer' }}>{profile.username}</h6>
            <small className='ms-auto text-primary' style={{ cursor: 'pointer' }}>Switch</small>
        </div>):(
            <p>Loading...</p>
        )}

        <div className='d-flex'>
            <p>Suggested for you</p>
            <b className='ms-auto'>See All</b>
        </div>
     </div>

     {suggestion.length > 0 ?(
            <div>
                {suggestion.map((suggest)=>(
                    <div key={suggest.id}>
                        <div className='d-flex ' >
                            <img className='rounded-circle  profPic mb-3' style={{ cursor: 'pointer' }} src={suggest.profile_pic} alt="Profile" />
                            <h5 style={{ cursor: 'pointer' }}>{suggest.username}</h5>
                            <small onClick={()=>{!followeduser[suggest.id] && handleFollow(suggest.id,suggest.username,suggest.profile_pic)}} className='text-primary ms-auto' style={{ cursor: 'pointer' }}>{followeduser[suggest.id] ? 'Following' : 'Follow'}</small>
                        </div>
                       
                      
                    </div>
                ))}
            </div>

        ):(
            <div>
                Loading....
            </div>
        )}
    </div>
    
  )
}

export default Suggestion