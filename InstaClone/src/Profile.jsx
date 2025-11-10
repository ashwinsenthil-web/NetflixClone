import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
    
    const[profile,setProfile]=useState(null);

    const[followers,setFollowers]=useState([])

    const[UnFollow,setUnfollow]=useState(0)

    useEffect(()=>{
        axios.get('http://localhost:3000/Profile').then((data)=>{
            setProfile(data.data)
        }).catch((err)=>{
            console.log(err)
        })

        axios.get('http://localhost:3000/followers').then((data)=>{
            setFollowers(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[UnFollow])

    function HandleOnChange(e){
        setProfile((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
          
    }

    const handleUpdate=async()=>{
        axios.put('http://localhost:3000/Profile',profile).
        then(()=>alert("Profile Updated")).
        catch((err)=>{
            console.log(err)
        })
    }

    const handleUnfollow=async(id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(setUnfollow(!UnFollow))
    }

  return (
    <div className='m-5'>
        {profile ? (
            <div >
                <img className='profile rounded-circle' src={profile.profile_pic} alt="prof_pic" /> 
                <h5 className='mt-1'>{profile.username}</h5> 
                <input onChange={HandleOnChange} className='form-control mt-1 w-25' type="text" value={profile.username} name='username'/>
                <input onChange={HandleOnChange} className='form-control my-4 w-25' type="text" value={profile.profile_pic} name='profile_pic'/>
                <button onClick={handleUpdate} className='btn btn-primary mb-5'>Update</button>
            </div>
        ):(
            <p>
                Loading Profile..
            </p>
        )}

        {followers.length>0 ? (
            followers.map((follow)=>(
                <div key={follow.id}>
                      <div className='d-flex following-profile'>
                            <img className='rounded-circle  profPic mb-3 ' src={follow.profile_pic} alt="Profile" />
                            <h5>{follow.username}</h5>
                            <small  className='text-primary ms-auto pt-1' style={{ cursor: 'pointer' }} onClick={()=>{handleUnfollow(follow.id)}} >UnFollow</small>
                        </div>
                       
                </div>
            )) 
        ):(
            <p>0 Following</p>
        )}
    </div>
  )
}

export default Profile