import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../cssfiles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi auctor, ultrices mauris vel,
              vestibulum velit. Nullam lobortis libero at justo elementum fermentum.
            </p>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">Return/Exchange Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund policy</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact us</h2>
          <p>123 Street Name, City, Country</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.502358107225!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI5JzQwLjYiTiAxMjnCsDAwJzA3LjMiRQ!5e0!3m2!1sen!2sus!4v1618415943286!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
