import React from 'react';
<<<<<<< HEAD
import { FaUser , FaShoppingCart ,FaHeart ,FaPhone} from 'react-icons/fa';
import '../cssfiles/headerDesktop.css';

=======
import { FaUser, FaShoppingCart, FaHeart, FaPhone } from 'react-icons/fa';
import '../cssfiles/headerDesktop.css';


>>>>>>> 3110cd7275db3fec76b5d9dbea6ea28437d3ee3b
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
<<<<<<< HEAD
        <img src="Hilsa.png" alt="Logo" />
=======
        <img src="vinculo.png" alt="Logo of the website" />
>>>>>>> 3110cd7275db3fec76b5d9dbea6ea28437d3ee3b
      </div>

      <nav className="navbar">
        <ul className="nav-menu">
<<<<<<< HEAD
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
=======
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
>>>>>>> 3110cd7275db3fec76b5d9dbea6ea28437d3ee3b
            </ul>
          </li>
          {/* Dropdown for Shop */}
          <li className="nav-item dropdown">
<<<<<<< HEAD
            <a href="#" className="dropdown-toggle">Women</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">Category 1</a></li>
              <li><a href="#" className="dropdown-item">Category 2</a></li>
              <li><a href="#" className="dropdown-item">Category 3</a></li>
=======
            <a href="#">Boys</a>
            <ul className="dropdown-menu">
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
>>>>>>> 3110cd7275db3fec76b5d9dbea6ea28437d3ee3b
            </ul>
          </li>
          <li className="nav-item">
            <a href="/contact">Deals</a>
          </li>
<<<<<<< HEAD
          
        
        </ul>
      </nav>

     

=======
        </ul>
      </nav>

>>>>>>> 3110cd7275db3fec76b5d9dbea6ea28437d3ee3b
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
<<<<<<< HEAD
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
=======

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

>>>>>>> 3110cd7275db3fec76b5d9dbea6ea28437d3ee3b
