// ProductDetail.js
import React from 'react';
import '../cssfiles/homeproduct.css';

function ProductDetail({ product, onBack }) {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail">
            <button className="btn back-btn" onClick={onBack}>Back</button>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetail;
