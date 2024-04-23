import '../cssfiles/headerDesktop.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


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
          </ul>
          
          

        </nav>

        <div className="search-bar">
          <input type="text" />
          <FontAwesomeIcon className='search-icon' icon={faSearch}  size='2x'/>
        </div>


      </header>
    </>
  )
}

export default Header