import React from 'react'
import myimage from '../pizza images/myimage.png'
import '../profile.css'
const Profile = () => {
  return (
    <div>
      <div className="profileCard">
        <div className="cardbox">
        <img className='myimage' src={myimage} alt="" />
        <br />
        <label>Name</label>
<p>Sukhdev Singh</p>
        <label>Email</label>
<p>SukhdevSingh0001@gmail.com</p>
        <label>Phone no.</label>
<p>1234567890</p>
        <label>username</label>
<p>SukhdevSingh0001</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
