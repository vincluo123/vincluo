import React from 'react';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import '../cssfiles/header.css';
import '../cssfiles/navheader.css';



const Header = () => {
  return (
    <>
    <div>
    <header className="header">
      <div className="logo">
      <span>Vinculo</span>
      </div>
      <div className="icons">
        <FaHeart className="icon" />
        <FaShoppingBag className="icon" />
        </div>
     </header>
     
  </div>
  
   
    </>
    
  );
};

export default Header;