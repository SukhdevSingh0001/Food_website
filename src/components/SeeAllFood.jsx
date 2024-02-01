import React, { useEffect, useState } from 'react'
import '../seeallfood.css'
import chesse from '../pizza images/chesse pizza.jpg'
import delicious from '../pizza images/delicious italian pizza.jpg'
import freshly from '../pizza images/freshly baked pizza.jpg'
import onion from '../pizza images/Onion pizza.jpg'
import primavera from '../pizza images/primavera pizza.jpg'
import vegan from '../pizza images/vegan artichoke pizza.jpg'
import vegetable from '../pizza images/vegetable pizza.jpg'
import vegetarian from '../pizza images/vegetarian pizza.jpg'
import veggie from '../pizza images/veggie pizza.jpg'
import BaconBurger from "../pizza images/Bacon Burger.jpg";
import BarbecueBurger from "../pizza images/Barbecue Burger.jpg";
import Cheeseburger from "../pizza images/Cheeseburger.jpg";
import ClassicHamburger from "../pizza images/Classic Hamburger.jpg";
import FishBurger from "../pizza images/Fish Burger.jpg";
import Mushroomburger from "../pizza images/Mushroom Burger.jpg";
import SliderBurger from "../pizza images/Slider.jpg";
import TurkeyBurger from "../pizza images/Turkey Burger.jpg";
import VeggieBurger from "../pizza images/Veggie Burger.jpg";
import FlankSteak from "../pizza images/Flank Steak.jpg";
import HangerSteak from "../pizza images/Hanger Steak.jpg";
import ribeyesteak from "../pizza images/Ribeye Steak.jpg";
import Sirloinsteak from "../pizza images/Sirloin Steak.jpg";
import skritsteak from "../pizza images/Skirt Steak.jpg";
import Tomahawksteak from "../pizza images/Tomahawk Steak.jpg";




const SeeAllFood = () => {
    const itemQuery = window?.location?.href?.split("name=")[1];
    // console.log(itemQuery)


    const pizzaData = [
        { id: 1, name: 'Chesse Pizza', url: chesse, price: 120.99 },
        { id: 2, name: 'Delicious Italian Pizza', url: delicious, price: 110.99 },
        { id: 3, name: 'Freshly Baked Pizza', url: freshly, price: 130.99 },
        { id: 4, name: 'Onion Pizza', url: onion, price: 125.99 },
        { id: 5, name: 'Primavera Pizza', url: primavera, price: 140.99 },
        { id: 6, name: 'Vegan Artichoke Pizza', url: vegan, price: 150.99 },
        { id: 7, name: 'Vegetable Pizza', url: vegetable, price: 130.99 },
        { id: 8, name: 'Vegetarian Pizza', url: vegetarian, price: 140.99 },
        { id: 9, name: 'Veggie Pizza', url: veggie, price: 120.99 },
        { id: 10, name: 'Bacon Burger', url: BaconBurger, price: 109.99 },
        { id: 11, name: 'Barbecue Burger', url: BarbecueBurger, price: 120.99 },
        { id: 12, name: 'Cheeseburger', url: Cheeseburger, price: 108.99 },
        { id: 13, name: 'Classic Hamburger', url: ClassicHamburger, price: 109.99 },
        { id: 14, name: 'Fish Burger', url: FishBurger, price: 120.99 },
        { id: 15, name: 'Mushroom Burger', url: Mushroomburger, price: 110.99 },
        { id: 16, name: 'Slider Burger', url: SliderBurger, price: 108.99 },
        { id: 17, name: 'Turkey Burger', url: TurkeyBurger, price: 109.99 },
        { id: 18, name: 'Veggie Burger', url: VeggieBurger, price: 120.99 },
        { id: 19, name: 'Flank Steak', url: FlankSteak, price: 170.99 },
        { id: 20, name: 'Hanger Steak', url: HangerSteak, price: 180.99 },
        { id: 21, name: 'Ribeye Steak', url: ribeyesteak, price: 190.99 },
        { id: 22, name: 'Sirloin Steak', url: Sirloinsteak, price: 160.99 },
        { id: 23, name: 'Skirt Steak', url: skritsteak, price: 170.99 },
        { id: 24, name: 'Tomahawk Steak', url: Tomahawksteak, price: 250.99 },
    ];


    const [data, setData] = useState(pizzaData);

    useEffect(() => {
        const d = pizzaData.filter((item) => item?.name.toLowerCase().includes(itemQuery.toLowerCase()))
        
        setData(d)
    }, [itemQuery])
    

    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
    e.target.innerHTML="Done";
    e.target.style.backgroundColor = 'gray';
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (

        <div>
            <div className="food">
                {data.map((e) => {
                    return <div>
                        <div className="card">
                         
                                <img src={e.url} alt="" />
                                <div className="rate">

                                    <span>{e.name}</span>
                                    <span>{e.price}</span>
                                </div>

                                <button
                                    className="foodbtn"
                                    onClick={handleClick}
                                    >
                                    Order now
                                </button>
                            </div>
                        </div>

               
                
                })
            }
                    {showPopup && (
                            <div className="popup-card">
                                <h2>Order Done!</h2>
                                <p>Your order has been successfully placed.</p>
                                <button onClick={closePopup}>Close</button>
                            </div>
                            )
                        }    
                    
    
  
            </div>
        </div>

)
                    }
    export default SeeAllFood
