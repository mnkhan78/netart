import React from 'react'
import logo from '../assets/logo.png'
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        {/* <h1 className="navbar-title">Your Brand Name</h1> */}
      </div>
    </nav>
  );
}

export default Navbar