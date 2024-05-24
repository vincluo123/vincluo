import React from 'react';
import { FaUser , FaShoppingCart ,FaHeart ,FaPhone} from 'react-icons/fa';
import '../cssfiles/headerDesktop.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="Hilsa.png" alt="Logo" />
      </div>

      <nav className="navbar">
        <ul className="nav-menu">
        <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">New Arrivals</a>
          </li>
          {/* Dropdown for Home */}
          <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle">Men</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Submenu 1</a></li>
              <li><a href="#" className="dropdown-item">Submenu 2</a></li>
              <li><a href="#" className="dropdown-item">Submenu 3</a></li>
            </ul>
          </li>
          {/* Dropdown for Shop */}
          <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle">Women</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Category 1</a></li>
              <li><a href="#" className="dropdown-item">Category 2</a></li>
              <li><a href="#" className="dropdown-item">Category 3</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/contact">Deals</a>
          </li>
          
        
        </ul>
      </nav>

     

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
{/*  
      <div className="account-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div> */}

      <div className="User dropdown">
        <a href="/cart" className="dropdown-toggle">
          <FaUser />
        </a>
        <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Login</a></li>
              <li><a href="#" className="dropdown-item">Register</a></li>
             
            </ul>
      </div>
      <div className="heart">
        <a href="/cart">
          <FaHeart />
        </a>
      </div>
      <div className="shopping-cart">
        <a href="/cart">
          <FaShoppingCart />
        </a>
      </div>
      <div className="Phone">
        <a href="/cart">
          <FaPhone />
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
