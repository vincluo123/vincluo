import React from 'react';
import { FaUser, FaShoppingCart, FaHeart, FaPhone } from 'react-icons/fa';
import '../cssfiles/headerDesktop.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="vinculo.png" alt="Logo of the website" />
      </div>

      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/contact">New Arrivals</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#">Infant</a>
            <ul className="dropdown-menu">
              <li><a href="#">Boys</a></li>
              <li><a href="#">Girls</a></li>
              <li><a href="#">Submenu 3</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#">Girls</a>
            <ul className="dropdown-menu">
              <li><a href="#">Submenu 1</a></li>
              <li><a href="#">Submenu 2</a></li>
              <li><a href="#">Submenu 3</a></li>
            </ul>
          </li>
          {/* Dropdown for Shop */}
          <li className="nav-item dropdown">
            <a href="#">Boys</a>
            <ul className="dropdown-menu">
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
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

      <div className="icons">
        <div className="icon">
          <a href="/cart">
            <FaHeart />
          </a>
        </div>
        <div className="icon">
          <a href="/cart">
            <FaShoppingCart />
          </a>
        </div>
      
        <div className="icon dropdown">
          <a href="/cart">
            <FaUser />
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

