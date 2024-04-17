import React from 'react';
import { FaUser, FaCartArrowDown} from 'react-icons/fa';
import "../cssfiles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="E-commerce Logo" />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/">Home</a></li>
          <li className="nav__item"><a href="/products">Products</a></li>
         
          
          <li className="nav__item">  <a href="http" className='icon'><FaUser /></a></li>
          <li className="nav__item">  <a href="https://instagram.com" className='icon'><FaCartArrowDown /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
