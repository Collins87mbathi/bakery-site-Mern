import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaInstagram } from 'react-icons/fa';
import {  FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
 
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  

  return (
    
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1 className='logo'> Perez Backeries</h1>  
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/cart'>Cart </Link>
                </li>
                <li>
                  <Link to='/Signup'>Signup</Link>
                </li>
                <li>
                  <Link to='/Login'>Login</Link>
                 </li> 
                         
          </ul>
        </div>
        <ul className='social-icons'>
              <li>
                <a href='https://www.twitter.com'><FaTwitter /></a>
              </li>
              <li>
                <a href='https://www.linkedin.com'>< FaLinkedin /></a>
              </li>
              <li>
                <a href='https://www.facebook.com'><FaFacebook /></a>
              </li>
              <li>
                <a href='https://www.Instagram.com'><FaInstagram /></a>
              </li>

              
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;