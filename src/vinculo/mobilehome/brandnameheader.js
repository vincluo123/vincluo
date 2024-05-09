import React from 'react';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import '../cssfiles/header.css';
import '../cssfiles/navheader.css';



const Header = () => {
  return (
    <>
    <div>
    <header className="header">
      <div className="logo m-0.2 name">
      <span>Vinculo</span>
      </div>
      <input type="text" placeholder="Search..."  className='search'/>
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