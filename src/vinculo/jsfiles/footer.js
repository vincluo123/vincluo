import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../cssfiles/footer.css';
import paytmIcon from '../footer images/paytm.svg';
import gpayIcon from '../footer images/google-pay.svg';
import phonepeIcon from '../footer images/phonepe.svg';
import codIcon from '../footer images/cod.svg';
import amzIcon from '../footer images/amazon-pay.svg';
import facebook from '../footer images/facebook.svg';
import whatsapp from '../footer images/whatsapp.svg';
import twitter from '../footer images/twitter.svg';
import instagram from '../footer images/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="about-us">
            <h3>About Us</h3>
            <p style={{textAlign:'justify'}}>
              In our company we are selling first quality tshirts for both men and women.
            </p>
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
          <div className="footer-social">
            <a href="https://instagram.com"><img src={instagram}></img></a>
            <a href="https://whatsapp.com"><img src={whatsapp}></img></a>
            <a href="https://facebook.com"><img src={facebook}></img></a>
            <a href="https://twitter.com"><img src={twitter}></img></a>
          </div>
        </div>
      </div>
      
      <div className="secure-payment-app">
      <div className="secure-payment-text">100% Secure Payment</div>
        <div className="payment-icons">
          
          <img src={paytmIcon} alt="Paytm" />
          <img src={gpayIcon} alt="GPay" />
          <img src={phonepeIcon} alt="PhonePe" />
          <img src={amzIcon} alt="Amazon Pay" />
          <img src={codIcon} alt="Cash on Delivery" />
        </div>
        
      </div>

      
      <div className="copyright">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
