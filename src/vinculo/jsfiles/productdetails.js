import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../cssfiles/productdetails.css';
import tshirt1 from '../product images/tshirt1.jpg';
import tshirt2 from '../product images/tshirt2.jpeg';
import tshirt3 from '../product images/tshirt3.jpeg';
import tshirt4 from '../product images/tshirt1.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Accordion } from 'react-bootstrap';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(379);
  const [productDetailsAccordion, setProductDetailsAccordion] = useState(false);
  const [manufacturerAccordion, setManufacturerAccordion] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleApply = () => {
    switch (selectedColor) {
      case 'blue':
        setSelectedPrice(379);
        break;
      case 'red':
        setSelectedPrice(399);
        break;
      case 'green':
        setSelectedPrice(419);
        break;
      case 'black':
        setSelectedPrice(449);
        break;
      default:
        setSelectedPrice(379);
    }
  };

  const images = [tshirt1, tshirt2, tshirt3, tshirt4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const handleProductDetailsAccordion = () => {
    setProductDetailsAccordion(!productDetailsAccordion);
    setManufacturerAccordion(false); // Close Manufacturer accordion
  };

  const handleManufacturerAccordion = () => {
    setManufacturerAccordion(!manufacturerAccordion);
    setProductDetailsAccordion(false); // Close Product Details accordion
  };

  return (
    <div className="product-details">
      <Helmet>
        <title>Product Details - T-Shirt</title>
        <meta name="description" content="Buy high-quality T-Shirts in various colors and sizes. Check price details, ratings, and manufacturer information." />
        <meta name="keywords" content="T-Shirt, Buy T-Shirt, T-Shirt Price, T-Shirt Ratings, T-Shirt Manufacturer, T-Shirt Colors, T-Shirt Sizes, Cotton T-Shirt, Casual Wear T-Shirt, Printed T-Shirt, Short Sleeve T-Shirt" />
      </Helmet>
      <div className="product-image-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`T-Shirt ${index + 1}`} className="product-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="product-info">
        <div className="price-ratings">
          <div className="price">
            <h3>Price Details</h3>
            <ul>
              <li>
                Special Price: <strong>₹{selectedPrice}</strong>
              </li>
              <li>
                Bank Offer: Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C
              </li>
              <li>
                Bank Offer: 5% Cashback on Flipkart Axis Bank CardT&C
              </li>
              <li>
                Bank Offer: 10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C
              </li>
            </ul>
          </div>
          <div className="ratings">
            <h3>Ratings</h3>
            <p>
              <span className="stars">★★★★☆</span> (2456 Reviews)
            </p>
          </div>
        </div>
        <div className="details">
          <h3>Details</h3>
          <ul>
            <li>
              <span className="label">Color:</span>
              <span className={`color-box blue ${selectedColor === 'blue' ? 'active' : ''}`} onClick={() => handleColorChange('blue')}></span>
              <span className={`color-box red ${selectedColor === 'red' ? 'active' : ''}`} onClick={() => handleColorChange('red')}></span>
              <span className={`color-box green ${selectedColor === 'green' ? 'active' : ''}`} onClick={() => handleColorChange('green')}></span>
              <span className={`color-box black ${selectedColor === 'black' ? 'active' : ''}`} onClick={() => handleColorChange('black')}></span>
            </li>
            <li>
              <span className="label">Sizes:</span> 
              <span className={`size ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => handleSizeChange('S')}>S</span>
              <span className={`size ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => handleSizeChange('M')}>M</span>
              <span className={`size ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => handleSizeChange('L')}>L</span>
              <span className={`size ${selectedSize === 'XL' ? 'active' : ''}`} onClick={() => handleSizeChange('XL')}>XL</span>
              <span className={`size ${selectedSize === 'XXL' ? 'active' : ''}`} onClick={() => handleSizeChange('XXL')}>XXL</span>
            </li>
          </ul>
          <button className="apply-button" onClick={handleApply}>Apply</button>
        </div>
        <div className="deliver-address">
          <h3>Deliver to</h3>
          <p>Your Address, City, Pincode</p>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={handleProductDetailsAccordion} className="accordion-header">
              Product Details
              <span className={`accordion-icon ${productDetailsAccordion ? 'active' : ''}`}></span>
            </Accordion.Header>
            <Accordion.Body className={`accordion-content ${productDetailsAccordion ? 'active' : ''}`}>
              <ul>
                <li>
                  <span className="label">Type:</span> T-Shirt
                </li>
                <li>
                  <span className="label">Sleeve:</span> Short Sleeve
                </li>
                <li>
                  <span className="label">Fit:</span> Regular
                </li>
                <li>
                  <span className="label">Fabric:</span> 100% Cotton
                </li>
                <li>
                  <span className="label">Style Code:</span> #W-101
                </li>
                <li>
                  <span className="label">Neck Type:</span> Round Neck
                </li>
                <li>
                  <span className="label">Ideal For:</span> Boys
                </li>
                <li>
                  <span className="label">Size:</span> 8 to 16 Yrs
                </li>
                <li>
                  <span className="label">Pattern:</span> Printed
                </li>
                <li>
                  <span className="label">Suitable For:</span> Casual Wear
                </li>
                <li>
                  <span className="label">Fabric Care:</span> Gentle Machine Wash
                </li>
                <li>
                  <span className="label">Manufacturer:</span> ABC Company
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={handleManufacturerAccordion} className="accordion-header">
              Manufacturer Details
              <span className={`accordion-icon ${manufacturerAccordion ? 'active' : ''}`}></span>
            </Accordion.Header>
            <Accordion.Body className={`accordion-content ${manufacturerAccordion ? 'active' : ''}`}>
              <ul>
                <li>
                  <span className="label">Name:</span> ABC Company
                </li>
                <li>
                  <span className="label">Address:</span> 123 Manufacturer Street, City, Country
                </li>
                <li>
                  <span className="label">Phone:</span> +1234567890
                </li>
                <li>
                  <span className="label">Email:</span> info@abccompany.com
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductDetails;
