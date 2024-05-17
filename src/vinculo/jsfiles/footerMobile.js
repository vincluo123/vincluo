import React, { useEffect } from 'react';
import '../cssfiles/footerMobile.css';
import { BrowserRouter, Link } from 'react-router-dom';

const Footermobile = () => {
  useEffect(() => {
    // Function to add meta tags
    const addMetaTag = (name, content) => {
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    };

    addMetaTag('description', 'Shop for high-quality t-shirts for both men and women on our mobile site. Secure payments, easy returns, and fast delivery.');
    addMetaTag('keywords', 'mobile t-shirt shopping, quality t-shirts, men\'s t-shirts, women\'s t-shirts, online t-shirt store, secure mobile payments, t-shirt return policy, fashion on mobile, track t-shirt order, contact us');
    addMetaTag('author', 'Your Company Name');

    // Clean up function to remove meta tags if needed
    return () => {
      document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="author"]').forEach(meta => meta.remove());
    };
  }, []);

  return (
    <footer className="mobile-footer">
      <BrowserRouter>
        <Link to='/'><div className="icon home"></div></Link>
        <Link to='/cart'><div className="icon cart"></div></Link>
        <Link to='#'><div className="icon order"></div></Link>
        <Link to='#'><div className="icon account"></div></Link>
        <Link to='#'><div className="icon categories"></div></Link>
      </BrowserRouter>
    </footer>
  );
}

export default Footermobile;
