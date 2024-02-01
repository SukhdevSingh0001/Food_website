import React from 'react'
import { Link } from 'react-router-dom'
import img from '../pizza images/dinner.png'
import '/src/Navbar.css'
const Navbar = () => {
  function downlord(){
    alert("Start Downlording")
  }
  return (
    <div>
        <div className="images">

        </div>
        <div className="container">
        <img className='foodimage' src={img} alt="" />
        <h1>FOOD</h1>
            <div className='flexCss'>

      <ul>
       <Link className='linktag' to="/"><li>Home</li></Link> 
       <Link className='linktag' to="/products"><li>Foods</li></Link> 
       <Link className='linktag' to="/contact"> <li>Contact Us</li></Link> 
       <Link className='linktag' to="/profile"> <li>Profile</li></Link> 
       {/* <Link className='linktag' to="/about"> <li>About</li></Link>  */}
      </ul>
            </div>
      

<div>
        <button onClick={downlord} className='downlordbtn'>Downlord App</button>
</div>
        {/* <button className='btn'>Login</button> */}
        </div>
    </div>
    
  )
}

export default Navbar
