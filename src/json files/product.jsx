import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../cssfiles/productdetails.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Accordion } from 'react-bootstrap';
import ProductDetails from '../jsfiles/productdetails';
const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(379);
  const [productDetailsAccordion, setProductDetailsAccordion] = useState(false);
  const [manufacturerAccordion, setManufacturerAccordion] = useState(false);

  const data = {
    images: [tshirt1, tshirt2, tshirt3, tshirt4],
    priceDetails: [
      "Special Price: ?379",
      "Bank Offer: Get ?25* instant discount for the 1st Flipkart Order using Flipkart UPI",
      "Bank Offer: 5% Cashback on Flipkart Axis Bank Card",
      "Bank Offer: 10% off on Citi-branded Credit Card EMI Transactions, up to ?2,000 on orders of ?5,000 and above"
    ],
    ratings: {
      stars: "?????",
      reviews: 2456
    },
    details: {
      colors: ["blue", "red", "green", "black"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    productDetails: {
      Type: "T-Shirt",
      Sleeve: "Short Sleeve",
      Fit: "Regular",
      Fabric: "100% Cotton",
      StyleCode: "#W-101",
      NeckType: "Round Neck",
      IdealFor: "Boys",
      Size: "8 to 16 Yrs",
      Pattern: "Printed",
      SuitableFor: "Casual Wear",
      FabricCare: "Gentle Machine Wash",
      Manufacturer: "ABC Company"
    },
    manufacturerDetails: {
      Name: "ABC Company",
      Address: "123 Manufacturer Street, City, Country",
      Phone: "+1234567890",
      Email: "info@abccompany.com"
    }
  };

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
          {data.images.map((image, index) => (
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
              {data.priceDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="ratings">
            <h3>Ratings</h3>
            <p>
              <span className="stars">{data.ratings.stars}</span> ({data.ratings.reviews} Reviews)
            </p>
          </div>
        </div>
        <div className="details">
          <h3>Details</h3>
          <ul>
            <li>
              <span className="label">Color:</span>
              {data.details.colors.map((color) => (
                <span
                  key={color}
                  className={`color-box ${color} ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => handleColorChange(color)}
                ></span>
              ))}
            </li>
            <li>
              <span className="label">Sizes:</span> 
              {data.details.sizes.map((size) => (
                <span
                  key={size}
                  className={`size ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </span>
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
                {Object.entries(data.productDetails).map(([key, value]) => (
                  <li key={key}>
                    <span className="label">{key}:</span> {value}
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
                {Object.entries(data.manufacturerDetails).map(([key, value]) => (
                  <li key={key}>
                    <span className="label">{key}:</span> {value}
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
