import React from 'react'
import '../components/products.css'
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
const Products = () => {
    let array = [
   { 
     name: "Pizza",
     price: "300rs",
     rating: "*****",
     image: "https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=400"
   },
   { 
     name: "Burger",
     price: "200rs",
     rating: "****",
     image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
   },
    
  
   { 
     name: "Steak",
     price: "500rs",
     rating: "*****",
     image: "https://plus.unsplash.com/premium_photo-1661333404664-f0a0e166ce52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN0ZWFrfGVufDB8fDB8fHww"
   },
   { 
     name: "Sushi",
     price: "400rs",
     rating: "*****",
     image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3VzaGl8ZW58MHx8MHx8fDA%3D"
   },
   { 
     name: "Salad",
     price: "150rs",
     rating: "****",
     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FsYWR8ZW58MHx8MHx8fDA%3D"
   },
   { 
     name: "Tacos",
     price: "180rs",
     rating: "***",
     image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFjb3N8ZW58MHx8MHx8fDA%3D"
   },
   { 
     name: "Ice Cream",
     price: "120rs",
     rating: "****",
     image: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww"
   },
   { 
     name: "Burrito",
     price: "220rs",
     rating: "****",
     image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnVycml0b3xlbnwwfHwwfHx8MA%3D%3D"
   },
   { 
     name: "Cake",
     price: "440rs",
     rating: "****",
     image: " https://plus.unsplash.com/premium_photo-1664205765598-85bfc3f61942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENha2V8ZW58MHx8MHx8fDA%3D"
   },
   
 ];
 const [search, setSearch] = useState('');
 const [data, setData] = useState(array);

 useEffect(() => {
   if (search === "") {
     setData(array);
   } else {
     const filteredData = array.filter((item) =>
       item.name.toLowerCase().includes(search.toLowerCase())
     );
     setData(filteredData);
   }
 }, [search]);
    

  return (
    <div>
        <div className="input-box">

        <input className='search-box' type="text" placeholder='search food name...' onChange={(e)=>{setSearch(e.target.value)}} />
        
        </div>
       <div className="food">
        {data.map((e)=>{
            return <div>
                <div className="card">
            <img className='images' src={e.image} alt="" />
            <div className="rate">

                <span>{e.name}</span>
                <span>{e.rating}</span>
            </div>
                <span>{e.price}</span>
          
            <Link className='linktag' to={`/see all?name=${e.name}`}><button className='foodbtn'>See all  </button></Link> 
            </div>

                </div>
            
        })}
       </div>
    </div>
  )
}

export default Products
