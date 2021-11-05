import React from 'react'
import {FaInstagram } from 'react-icons/fa';
import {  FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
            <h3>Perez Backeries</h3>
            </div>
          <div className="welcoming">
              <p>welcome all and experience greatness of our backeries.Our customers joy is our pleasure</p>
          </div>
           <div className="footericons">
           <a href='https://www.twitter.com'><FaTwitter /></a>
           <a href='https://www.linkedin.com'><FaLinkedin /></a>
           <a href='https://www.facebook.com'><FaFacebook /></a>
           <a href='https://www.instagram.com'><FaInstagram /></a>
           </div>
          <div className="copyright">
              <p>copyright &copy;{(new Date().getFullYear())}. build with  by Collins</p> 
          </div>
        </footer>
    )
}

export default Footer
