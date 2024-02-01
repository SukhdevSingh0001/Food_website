import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ContactFile from './components/ContactFile'
import Profile from './components/Profile'
// import About from './components/About'
import Products from './components/Products'
import SeeAllFood from './components/SeeAllFood'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
   

<Route path="/" element={<Home/>}></Route>
<Route path="/products" element={<Products/>}></Route>
<Route path="/contact" element={<ContactFile/>}></Route>
<Route path="/profile" element={<Profile/>}></Route>
{/* <Route path="/about" element={<About/>}></Route> */}
<Route path="/see all" element={<SeeAllFood/>}></Route>




  </Routes>
  </BrowserRouter>
  </>
  
  
)
