import React from 'react';
import '../cssfiles/productdetails.css';

function ProductDetails({ product, onBack }) {
    return (
        <div className="product-details">
            <button onClick={onBack}>Back</button>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default ProductDetails;
