import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../jsonfiles/products.json';
import '../cssfiles/productdetails.css';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Find the product by id from the JSON file
        const foundProduct = productsData.find(product => product.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default ProductDetails;
