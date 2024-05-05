import React from 'react';
import { FaUser, FaShoppingCart, FaHeart, FaPhone } from 'react-icons/fa';
import '../cssfiles/headerDesktop.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="Hilsa.png" alt="Logo" />
      </div>




      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
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
      <div className="User dropdown">
        <a href="/cart" className="dropdown-toggle">
          <FaUser />
        </a>
        <ul className="dropdown-menu">
          <li><a href="#" className="dropdown-item">Login</a></li>
          <li><a href="#" className="dropdown-item">Register</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;