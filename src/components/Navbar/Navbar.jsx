import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logowebsite.png';
import cart from '../assets/images/shopping-cart.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
  };

  return (
    <div className='navbar'>
      <div className='nav-bar'>
       <Link to='/'> <img src={logo} alt='Website Logo' /></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("shop")}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop" && <hr />}</li>
        <li onClick={() => handleMenuClick("mens")}><Link style={{textDecoration: 'none'}} to='/bodys'>Body</Link>{menu === "mens" && <hr />}</li>
        <li onClick={() => handleMenuClick("hairs")}><Link style={{textDecoration: 'none'}} to='/hairs'>Hair</Link>{menu === "hairs" && <hr />}</li>
        <li onClick={() => handleMenuClick("faces")}><Link style={{textDecoration: 'none'}} to='/faces'>Face</Link>{menu === "faces" && <hr />}</li>
      </ul>
      <div className='cart'>
        <Link to='/cart'><img src={cart} alt='Shopping Cart' /></Link>
      </div>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
