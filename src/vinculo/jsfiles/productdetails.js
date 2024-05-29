import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../cssfiles/productdetails.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Accordion } from 'react-bootstrap';
import productdetails from '../jsonfiles/productdetails.json';

// Importing images
import tshirt1 from '../product images/tshirt1.jpg';
import tshirt2 from '../product images/tshirt2.jpeg';
import tshirt3 from '../product images/tshirt3.jpeg';
import tshirt4 from '../product images/tshirt1.jpg';

const imageMap = {
  "tshirt1.jpg": tshirt1,
  "tshirt2.jpeg": tshirt2,
  "tshirt3.jpeg": tshirt3,
  "tshirt1.jpg": tshirt4
};

const ProductDetails = () => {
  const { product } = productdetails;
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(product.price.blue);
  const [productDetailsAccordion, setProductDetailsAccordion] = useState(false);
  const [manufacturerAccordion, setManufacturerAccordion] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedPrice(product.price[color]);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleApply = () => {
    if (selectedColor) {
      setSelectedPrice(product.price[selectedColor]);
    }
  };

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
    setManufacturerAccordion(false);
  };

  const handleManufacturerAccordion = () => {
    setManufacturerAccordion(!manufacturerAccordion);
    setProductDetailsAccordion(false);
  };

  return (
    <div className="product-details">
      <Helmet>

        <title>Product Details - T-Shirt</title>

        <title>Product Details - {product.name}</title>

        <meta name="description" content="Buy high-quality T-Shirts in various colors and sizes. Check price details, ratings, and manufacturer information." />
        <meta name="keywords" content="T-Shirt, Buy T-Shirt, T-Shirt Price, T-Shirt Ratings, T-Shirt Manufacturer, T-Shirt Colors, T-Shirt Sizes, Cotton T-Shirt, Casual Wear T-Shirt, Printed T-Shirt, Short Sleeve T-Shirt" />
      </Helmet>
      <div className="product-image-container">
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={imageMap[image]} alt={`T-Shirt ${index + 1}`} className="product-image" />
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
              {product.offers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>
          <div className="ratings">
            <h3>Ratings</h3>
            <p>
              <span className="stars">{"★".repeat(product.ratings.stars)}{"☆".repeat(5 - product.ratings.stars)}</span> ({product.ratings.reviews} Reviews)
            </p>
          </div>
        </div>
        <div className="details">
          <h3>Details</h3>
          <ul>
            <li>
              <span className="label">Color:</span>
              {Object.keys(product.price).map((color) => (
                <span
                  key={color}
                  className={`color-box ${color} ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => handleColorChange(color)}
                ></span>
              ))}
            </li>
            <li>
              <span className="label">Sizes:</span>
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <span
                  key={size}
                  className={`size ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >{size}</span>
              ))}
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
                {Object.entries(product.details).map(([key, value]) => (
                  <li key={key}>
                    <span className="label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span> {value}
                  </li>
                ))}
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
                {Object.entries(product.manufacturer).map(([key, value]) => (
                  <li key={key}>
                    <span className="label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span> {value}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductDetails;
