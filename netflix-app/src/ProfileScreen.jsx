import React from 'react'
import Nav from './Nav'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from './feature/UserSlice'
import { auth } from './firebase'

function ProfileScreen() {

    const user=useSelector(selectUser);

  return (
    <div>
        <Nav/>
        <div className="ProfileScreen_content">
            <div className="ProfileScreen_conts2">
                <h1>Edit Profile</h1>
                <div className="ProfileScreen_info">
                    <img src="/netflix-avatar.jpg" alt="" />
                    <div className="ProfileScreen_account">
                        <h6>{user.email}</h6>
                        <div className="ProfileScreen_plan">
                            <h4>Plans (Current Plan:Premium)</h4>
                           <hr class="profile-line" />
                          
                            <button onClick={()=> auth.signOut()}  className=''>Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default ProfileScreen