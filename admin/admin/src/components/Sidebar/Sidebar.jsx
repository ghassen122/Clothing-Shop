import React from "react";
import './Sidebar.css'
import add_icon from '../../assetts/add_icon.png';
import order_icon from '../../assetts/list-icon1.png';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={add_icon} alt="" />
            <p>Add clothes</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={order_icon} alt="" />
            <p>List Clothes</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={order_icon} alt="" />
            <p>List Orders</p>
        </NavLink>
       
      </div>
    </div>
  )
}

export default Sidebar