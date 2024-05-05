// Boys.js

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../cssfiles/boys.css';

function Boys() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [minCost, setMinCost] = useState('');
    const [maxCost, setMaxCost] = useState('');

    const products = [
        {
            id: 1,
            name: "T-Shirt 1",
            price: 19.99,
            size: "M",
            color: "Red",
            image: "BOYS-4_page-0001.jpg"
        },
        {
            id: 2,
            name: "T-Shirt 2",
            price: 12.99,
            size: "L",
            color: "Blue",
            image: "BOYS-5_page-0001.jpg"
        },
        {
            id: 3,
            name: "T-Shirt 3",
            price: 50.99,
            size: "XL",
            color: "Black",
            image: "BOYS-6_page-0001.jpg"
        },
        {
            id: 3,
            name: "T-Shirt 4",
            price: 19.99,
            size: "XL",
            color: "Black",
            image: "BOYS-7_page-0001.jpg"
        },
        {
            id: 3,
            name: "T-Shirt 5",
            price: 19.99,
            size: "XL",
            color: "Black",
            image: "BOYS-8_page-0001.jpg"
        },
        {
            id: 3,
            name: "T-Shirt 6",
            price: 19.99,
            size: "XL",
            color: "Black",
            image: "BOYS-9_page-0001.jpg"
        },
        {
            id: 3,
            name: "T-Shirt 7",
            price: 19.99,
            size: "XL",
            color: "Black",
            image: "BOYS-10_page-0001.jpg"
        },
        {
            id: 3,
            name: "T-Shirt 8",
            price: 19.99,
            size: "XL",
            color: "Black",
            image: "BOYS-11_page-0001.jpg"
        },

    ];

    const filterProducts = (product) => {
        if (selectedSize && product.size !== selectedSize) {
            return false;
        }
        if (selectedColor && product.color !== selectedColor) {
            return false;
        }
        if (minCost && product.price < parseFloat(minCost)) {
            return false;
        }
        if (maxCost && product.price > parseFloat(maxCost)) {
            return false;
        }
        return true;
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleCostChange = (min, max) => {
        setMinCost(min);
        setMaxCost(max);
    };

    return (
        <div className="boys">
            <div className="sidebar">
                <div className="filter-section">
                    <h5>Sizes</h5>
                    <button onClick={() => handleSizeChange('M')}>M</button>
                    <button onClick={() => handleSizeChange('L')}>L</button>
                    <button onClick={() => handleSizeChange('XL')}>XL</button>
                </div>
                <div className="filter-section">
                    <h5>Colors</h5>
                    <div className="color-options">
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'red' }} onClick={() => handleColorChange('Red')}></button>
                            <span className="color-name">Red</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'blue' }} onClick={() => handleColorChange('Blue')}></button>
                            <span className="color-name">Blue</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'black' }} onClick={() => handleColorChange('Black')}></button>
                            <span className="color-name">Black</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'green' }} onClick={() => handleColorChange('green')}></button>
                            <span className="color-name">Green</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'yellow' }} onClick={() => handleColorChange('yellow')}></button>
                            <span className="color-name">Yellow</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'skyblue' }} onClick={() => handleColorChange('skyblue')}></button>
                            <span className="color-name">Sky Blue</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'purple' }} onClick={() => handleColorChange('purple')}></button>
                            <span className="color-name">Purple</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'orange' }} onClick={() => handleColorChange('orange')}></button>
                            <span className="color-name">Orange</span>
                        </div>
                    </div>
                </div>


                <div className="filter-section">
                    <h5>Filter</h5>
                    <div className="price-ranges">
                        <button onClick={() => handleCostChange(0, 100)}>0 - 100</button>
                        <button onClick={() => handleCostChange(100, 200)}>100 - 200</button>
                        <button onClick={() => handleCostChange(200, 300)}>200 - 300</button>
                        <button onClick={() => handleCostChange(300, 400)}>300 - 400</button>
                        <button onClick={() => handleCostChange(400, 500)}>400 - 500</button>

                    </div>
                </div>
            </div>

            <div className="Boys-dress">
                <h1>8 - 16 Boys</h1>
                <div className="container container-row">
                    {products.filter(filterProducts).map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h5>{product.name}</h5>
                            <p>${product.price.toFixed(2)}</p>
                            <button className="btn" id='cart-btn' style={{ backgroundColor: '#d9d9d9' }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Boys;