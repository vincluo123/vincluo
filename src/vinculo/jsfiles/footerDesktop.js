import React, { useEffect } from 'react';
import '../cssfiles/footerDesktop.css';
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
  useEffect(() => {
    // Function to add meta tags
    const addMetaTag = (name, content) => {
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    };

    addMetaTag('description', 'Buy high-quality t-shirts for both men and women. Enjoy secure payments, easy returns, and fast delivery.');
    addMetaTag('keywords', 'quality t-shirts, men\'s t-shirts, women\'s t-shirts, online t-shirt store, t-shirt return policy, secure payment options, fashion blog, track t-shirt order, privacy policy, contact us');
    addMetaTag('author', 'Your Company Name');

    // Clean up function to remove meta tags if needed
    return () => {
      document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="author"]').forEach(meta => meta.remove());
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>COMPANY</h3>
          <div className="company-columns">
            <div className="company-column">
              <ul>
                <li><a href="#">Search</a></li>
                <li><a href="#">Return/Exchange Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Stores</a></li>
              </ul>
            </div>
            <div className="company-column">
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Refund policy</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-about">
          <h3>About Us</h3>
          <div className="about-us">
            <p style={{ textAlign: 'justify' }}>
              In our company, we sell high-quality t-shirts for both men and women. Our t-shirts are known for their superior quality and stylish designs, making them a popular choice for fashion enthusiasts.
            </p>
          </div>
          <div className="footer-contact">
            <h3>Contact us</h3>
            <p>123 Street Name, City, Country</p>
            <p>Phone: +1234567890</p>
            <div className="footer-social">
              <a href="https://instagram.com"><img src={instagram} alt="Instagram" /></a>
              <a href="https://whatsapp.com"><img src={whatsapp} alt="WhatsApp" /></a>
              <a href="https://facebook.com"><img src={facebook} alt="Facebook" /></a>
              <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
            </div>
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
