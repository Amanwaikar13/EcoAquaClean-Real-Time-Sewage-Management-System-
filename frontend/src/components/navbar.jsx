import React from 'react'
import '../styling/navbar-style.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <header>
        <div className="logo-container">
          <a href="/" className="logo">
            <img src="./images/charts-and-graphs.gif" alt="Logo" />
          </a>
          <h2 className='text-info'>EcoA<span className='text-warning'>quaCl<span style={{color:'yellow'}}>ean</span></span></h2>
        </div> 
        <ul className="navbar">
          {/* <li><a href="/">Home</a></li> */}
          <li><a href="#about">About Us</a></li>
          <li><a href="#Fretures">Features</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#review">Review</a></li>
          <li><a href="#social">Social</a></li>
        </ul>
        <div className="header">
          <ul className="header-btn">
            <li><a href="/sign-in" className="signup">Sign Up</a></li>
            <li><a href="/sign-in" className="login">Log In</a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default NavBar;
