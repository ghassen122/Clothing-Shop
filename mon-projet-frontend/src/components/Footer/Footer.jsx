import React from 'react'
import './Footer.css'
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import logo2 from '../../assets/logo2.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>Cloh</h2>
            <p>More than just a fashion retailer, we are dedicated to craftsmanship and conscious style. Each piece in our collection is thoughtfully selected or designed to offer superior comfort, enduring quality, and modern silhouettes that transcend seasons.</p>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>-216-52-817-2599</li>
                <li>contact@CloH.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026© CloH.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
