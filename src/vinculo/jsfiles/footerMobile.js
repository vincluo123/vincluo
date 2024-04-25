import React from 'react';
import '../cssfiles/footerMobile.css';

const Footermobile = () => {
  return (
    <footer className="mobile-footer">
      <a href='#'><div className="icon home"></div></a>
      <a href='#'><div className="icon cart"></div></a>
      <a href='#'><div className="icon order"></div></a>
      <a href='#'><div className="icon account"></div></a>
      <a href='#'><div className="icon categories"></div></a>
    </footer>
  );
}

export default Footermobile;
