import React from 'react'
import Slider from "react-slick";
import './Header.css'

const Header = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings}>
        <div className='photos'>
        <img src='https://images.unsplash.com/photo-1609590981063-d495e2914ce4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdHJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'alt="pic"/>
        </div>
        <div className='photos'>
        <img src='https://images.unsplash.com/photo-1624797338770-feeb04402bf2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhc3RyaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'alt="pic"/>
        </div>
        <div className='photos'>
        <img src='https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3RyaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'alt="pic"/>
        </div>
        <div className='photos'>
        <img src='https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RyaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'alt="pic"/>
        </div>
        <div className='photos'>
        <img src='https://images.unsplash.com/photo-1608039783021-6116a558f0c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdHJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'alt="pic"/>
        </div>
        <div className='photos'>
        <img src='https://images.unsplash.com/photo-1625503782763-059a3626785d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RyaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'alt="pic"/>
        </div>
        
      </Slider>
    )
}

export default Header
