import React from 'react';

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
          <li className="nav__item"><a href="/cart">Cart</a></li>
          <li className="nav__item"><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
