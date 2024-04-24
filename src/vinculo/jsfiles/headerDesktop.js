import '../cssfiles/headerDesktop.css';
import React from 'react'


export const Header = () => {
  return (
    <>
      <header>
        <div className="logo-img">
          <h1>Vinculo</h1>
        </div>

        <nav>
          <ul className='nav-items'>
            <li><a href="#">Infant</a></li>
            <li><a href="#">Boys</a></li>
            <li><a href="#">Girls</a></li>
            <li><a href="#">Offers</a></li>
          </ul>

        </nav>

        <div className='right-side-header'>
          <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src="searchicon.png" alt="" />
          </div>
          <button className='login-button'>Login</button>
        </div>

      </header>
    </>
  )
}

export default Header