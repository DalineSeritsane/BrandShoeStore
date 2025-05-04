import React from 'react'
import './navbar.css';
import logo from "../Assets/logo.jpg";
import cart from "../Assets/cart.jpg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className= "nav-logo">
            <img src={logo} alt=""/>
            <p>Sneaker FiT</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Nike</li>
            <li>Puma</li>
            <li>Valentino</li>

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
