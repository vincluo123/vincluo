import React, { useState } from 'react';
import '../cssfiles/boys.css';
import { FaHeart } from 'react-icons/fa';

function Boys() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCostRange, setSelectedCostRange] = useState('');




    const products = [
        { id: 1, name: "T-Shirt 1", price: 19.99, size: "M", color: "Red", image: "BOYS-4_page-0001.jpg",  },
        { id: 2, name: "T-Shirt 2", price: 12.99, size: "L", color: "Blue", image: "BOYS-5_page-0001.jpg",  },
        { id: 3, name: "T-Shirt 3", price: 50.99, size: "XL", color: "Black", image: "BOYS-6_page-0001.jpg",  },
        { id: 4, name: "T-Shirt 4", price: 19.99, size: "XL", color: "Black", image: "BOYS-7_page-0001.jpg",},
        { id: 5, name: "T-Shirt 5", price: 19.99, size: "XL", color: "Black", image: "BOYS-8_page-0001.jpg", },
        { id: 6, name: "T-Shirt 6", price: 19.99, size: "XL", color: "Black", image: "BOYS-9_page-0001.jpg",  },
        { id: 7, name: "T-Shirt 7", price: 19.99, size: "XL", color: "Black", image: "BOYS-10_page-0001.jpg",  },
        { id: 8, name: "T-Shirt 8", price: 19.99, size: "XL", color: "Black", image: "BOYS-11_page-0001.jpg", },
        { id: 7, name: "T-Shirt 7", price: 19.99, size: "XL", color: "Black", image: "BOYS-10_page-0001.jpg",},
        { id: 8, name: "T-Shirt 8", price: 19.99, size: "XL", color: "Black", image: "BOYS-11_page-0001.jpg", },

    ];

    const filterProducts = (product) => {
        if (selectedSize && product.size !== selectedSize) {
            return false;
        }
        if (selectedColor && product.color !== selectedColor) {
            return false;
        }
        if (selectedCostRange) {
            const [minCost, maxCost] = selectedCostRange.split('-').map(Number);
            if (product.price < minCost || product.price > maxCost) {
                return false;
            }
        }
        
        return true;
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleCostChange = (event) => {
        setSelectedCostRange(event.target.value);
    };

    const [clickedHearts, setClickedHearts] = useState({});

    const handleClick = (productId) => {
        setClickedHearts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));

        console.log(productId);
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
                <div className="color-section">
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
                            <button className="color-button" style={{ backgroundColor: 'green' }} onClick={() => handleColorChange('Green')}></button>
                            <span className="color-name">Green</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'yellow' }} onClick={() => handleColorChange('Yellow')}></button>
                            <span className="color-name">Yellow</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'skyblue' }} onClick={() => handleColorChange('Sky Blue')}></button>
                            <span className="color-name">Sky Blue</span>
                        </div>
                        <div className="color-button-container">
                            <button className="color-button" style={{ backgroundColor: 'purple' }} onClick={() => handleColorChange('Purple')}></button>
                            <span className="color-name">Purple</span>
                        </div>
                    </div>
                </div>
                <div className="cost-section">
                    <h5>Filter by Price</h5>
                    <div className="price-ranges">
                        <label>
                            <input type="radio" value="0-10" name="price" onChange={handleCostChange} />
                            Under $10
                        </label>
                        <label>
                            <input type="radio" value="10-25" name="price" onChange={handleCostChange} />
                            $10 to $25
                        </label>
                        <label>
                            <input type="radio" value="25-50" name="price" onChange={handleCostChange} />
                            $25 to $50
                        </label>
                        <label>
                            <input type="radio" value="50-100" name="price" onChange={handleCostChange} />
                            $50 to $100
                        </label>
                        <label>
                            <input type="radio" value="100-200" name="price" onChange={handleCostChange} />
                            $100 to $200
                        </label>
                        <label>
                            <input type="radio" value="200-" name="price" onChange={handleCostChange} />
                            $200 & Above
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="Boys-dress">

                <div className="container">
                    {products.filter(filterProducts).map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h5>{product.name}</h5>
                            <p>${product.price.toFixed(2)}</p>
                            <button className="btn" id='cart-btn'>Add to Cart</button>
                            <button className="btn-heart" onClick={() => handleClick(product.id)}>
                                <span>
                                    <FaHeart color={clickedHearts[product.id] ? '#4e4e73' : 'gray'} />
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Boys;
