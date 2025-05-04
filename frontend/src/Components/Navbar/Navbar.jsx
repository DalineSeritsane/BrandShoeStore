import React, { useState} from 'react'
import './navbar.css';
import logo from "../Assets/logo.jpg";
import cart from "../Assets/cart.jpg";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className= "nav-logo">
            <img src={logo} alt=""/>
            <p>Sneaker FiT</p>
        </div>
        <ul className="nav-menu">
            <li onClick= {()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick= {()=>{setMenu("nike")}}>Nike{menu==="nike"?<hr/>:<></>}</li>
            <li onClick= {()=>{setMenu("puma")}}>Puma{menu==="puma"?<hr/>:<></>}</li>
            <li onClick= {()=>{setMenu("valentino")}}>Valentino{menu==="valentino"?<hr/>:<></>}</li>

        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart} alt=''/>
            <div className='nav-cart-count'>0</div>
        </div>
      
    </div>
  )
}

export default Navbar
