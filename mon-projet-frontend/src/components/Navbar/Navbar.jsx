import React, { useContext, useState, useEffect } from 'react'
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import basket from '../../assets/basket.png';
import basket1 from '../../assets/basket1.png';
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';
import { ClothesContext } from '../../context/context';
import { ShoppingBasket } from "lucide-react";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { token, setToken, getCountCartItems } = useContext(ClothesContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className="navbar">

      <Link>  <img className='logo' src={logo2} alt="" /> </Link>

      <ul className='navbar-menu'>
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#categories' onClick={() => setMenu("categories")} className={`${menu === "categories" ? "active" : ""}`}>categories</a>
        <a href="#footer" onClick={() => setMenu("Contact us")} className={`${menu === "contact us" ? "active" : ""}`}>contact us</a>
      </ul>
      <div className="navbar-right">
       

        <Link to="/Cart">
          <div className="basket-link">

            {getCountCartItems() > 0 && (
              <div className="dot">{getCountCartItems()}</div>
            )}
          <img src={basket1} className='basket-img' />

          </div>
        </Link>

        {!token ? <Link to="/Login"> <button>login</button></Link>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <p>Orders</p></li>
              <hr />
              <li onClick={logout}>  <p>Logout</p></li>
            </ul>
          </div>
        }

      </div>
    </div>

  )
}

export default Navbar