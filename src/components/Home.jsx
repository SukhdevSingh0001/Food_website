import React from 'react'
import '../home.css'
import picture from '../pizza images/logo.jpg'
import sideimage from '../pizza images/sideimg.jpeg'
import { Link } from 'react-router-dom'
const Home = () => {
 
  return (
    <div className="home-container">
      <div className="bgcolor">

      <img className='homebgpic' />
    <Link to='/products'>   <h1 className='home-text'><i> BEST OFFER $99.99</i><button>ORDER NOW</button></h1></Link>
    <img className='sideimage' src={sideimage} alt=""  />
    <div className="bestoffer">

      <h1 className='heading'><i>ORDER NOW</i>  </h1>
      <Link to='/products'>  <button className='orderbtn'><i> VIEW MORE</i></button></Link>
    </div>
    </div>
      </div>
    
  )
}

export default Home
