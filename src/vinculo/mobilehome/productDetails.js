// ProductDetails.js
import React, { useEffect, useState } from 'react';
import '../cssfiles/productdetails.css';

function ProductDetails({ product }) {
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        // Fetch product details if a product is selected
        if (product) {
            setProductDetails(product);
        }
    }, [product]);

    if (!productDetails) {
        return <div>Please select a product to see details</div>;
    }

    return (
        <div className="product-details">
            <h2>{productDetails.name}</h2>
            <img src={productDetails.image} alt={productDetails.name} />
            <p>Price: ${productDetails.price.toFixed(2)}</p>
            <p>Description: {productDetails.description}</p>
        </div>
    );
}

export default ProductDetails;
