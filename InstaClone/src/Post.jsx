import React, { useEffect, useState } from 'react'


function Post() {
    
    const[posts,setPost]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/post').then((res)=>{
            return res.json()
        }).then((data)=>{
            setPost(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])



  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0 ?(
            <div>
                {posts.map((post)=>(
                    <div key={post.id}>
                        <div className='d-flex '>
                            <img className='rounded-circle  profPic' src={post.user.profile_pic} alt="Profile" />
                            <h5>{post.user.username}</h5>
                        </div>
                        <img className='postImage' src={post.image.url} alt='post' />
                        <div>
                            <i className='bi bi-heart'></i>
                            <i className='bi bi-chat'></i>
                            <i className='bi bi-send'></i>
                        </div>
                        <div>
                            <b>{post.likes.count} Likes</b>
                        </div>
                        <p className='mb-4'>{post.caption}</p>
                      
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

export default Post