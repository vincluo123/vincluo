import React from 'react';
import '../cssfiles/footerMobile.css';
import { BrowserRouter,Link} from 'react-router-dom';
 

const Footermobile = () => {
  return (
    <footer className="mobile-footer">
    <BrowserRouter>  <Link to='/'><div className="icon home"></div></Link>
      <Link to='/cart'><div className="icon cart"></div></Link>
      <Link to='#'><div className="icon order"></div></Link>
      <Link to='#'><div className="icon account"></div></Link>
      <Link to='#'><div className="icon categories"></div></Link></BrowserRouter>
    </footer>
  );
}

export default Footermobile;
