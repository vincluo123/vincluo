import React from 'react';
import {  FaCartArrowDown, } from 'react-icons/fa';
import '../cssfiles/header.css';




const Header = () => {
  return (
    <header className="header">
     
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

     

     
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/shop">Shop</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

     
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>

     

     
      <div className="account-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>

     
      <div className="shopping-cart">
        <a href="/cart">
          <FaCartArrowDown />
        </a>
      </div>

     
      <div className="language-selector">
        <select>
          <option value="en">English</option>
          <option value="fr">Tamil</option>
          <option value="hi">Hindi</option>
         
        </select>
      </div>

     

     
    </header>
  );
};

export default Header;