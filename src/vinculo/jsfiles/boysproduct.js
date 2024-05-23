import React from 'react';
import '../cssfiles/boysproduct.css';

const ProductDetails = ({ product, onBack }) => {
    if (!product) {
        return <div>No product details available</div>;
    }

    
    return (
        <div className="product-details-container">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Price: {product.price}</p>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
            <p>Sleeve: {product.sleeve}</p>
            <p>Fit: {product.fit}</p>
            <p>Neck: {product.neck}</p>
            
            <button onClick={onBack}>Back to Products</button>
        </div>
    );
};

export default ProductDetails;
