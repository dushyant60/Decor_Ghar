import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src='./images/decorGharLogo.png' alt="Logo" />
      </div>
      <ul className="menu">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <button className="sign-in">Sign In</button>
    </nav>
  );
};

export default Navbar;
