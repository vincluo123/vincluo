// ViewDetails.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../cssfiles/viewdetails.css';

const ViewDetails = () => {
    const location = useLocation();
    const { product } = location.state;

    // Image carousel logic
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageList] = useState([product.imagefront, product.image, product.imageback]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [imageList.length]);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

    return (
        <div className="view-details-container">
            <div className="image-carousel">
                <button className="carousel-button prev" onClick={prevImage}>
                    &lt;
                </button>
                {imageList.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={product.name}
                        className={index === currentImageIndex ? 'active' : ''}
                        id='productimg'
                    />
                ))}
                <button className="carousel-button next" onClick={nextImage}>
                    &gt;
                </button>
            </div>
            <div className="product-details">
                <h1 className="product-details-heading">Product Details</h1>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
                <p>Brand Name: {product.brandname}</p>
                <p>Size: {product.Size}</p>
                <p>Color: {product.color}</p>
                <p>Fit: {product.fit}</p>
                <p>Neck Type: {product.necktype}</p>
                <p>Sleeve: {product.sleevetype}</p>
                <p>Product Description: {product.Productdescription}</p>
                <button className="buy-button">Buy Now</button>
                <div className="delivery-details">
                    <h3>Manufacturer Details:</h3>
                    <p>Manufacturer: XYZ Clothing Company</p>
                    <p>Address: 123 Manufacturer Street, City, Country</p>
                    <h3>Delivery Details:</h3>
                    <p>Estimated Delivery Time: 3-5 business days</p>
                    <p>Shipping Cost: Free</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
