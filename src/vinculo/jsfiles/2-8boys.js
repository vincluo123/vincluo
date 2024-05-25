import React, { useState } from 'react';
import '../cssfiles/2-8boys.css'; // Import CSS file
import { FaHeart } from 'react-icons/fa';

function Boys() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCostRange, setSelectedCostRange] = useState('');
    const [clickedHearts, setClickedHearts] = useState({});

    const products = [
        { id: 1, name: "T-Shirt 1", price: 19.99, size: "M", color: "Red", image: "BOYS-4_page-0001.jpg" },
        { id: 2, name: "T-Shirt 2", price: 12.99, size: "L", color: "Blue", image: "BOYS-5_page-0001.jpg" },
        { id: 3, name: "T-Shirt 3", price: 50.99, size: "XL", color: "Black", image: "BOYS-6_page-0001.jpg" },
        { id: 4, name: "T-Shirt 4", price: 19.99, size: "XL", color: "Black", image: "BOYS-7_page-0001.jpg" },
        { id: 5, name: "T-Shirt 5", price: 19.99, size: "XL", color: "Black", image: "BOYS-8_page-0001.jpg" },
        { id: 6, name: "T-Shirt 6", price: 19.99, size: "XL", color: "Black", image: "BOYS-9_page-0001.jpg" },
        { id: 7, name: "T-Shirt 7", price: 19.99, size: "XL", color: "Black", image: "BOYS-10_page-0001.jpg" },
        { id: 8, name: "T-Shirt 8", price: 19.99, size: "XL", color: "Black", image: "BOYS-11_page-0001.jpg" }
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
            if (product.price < minCost || (maxCost && product.price > maxCost)) {
                return false;
            }
        }
        return true;
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size === selectedSize ? '' : size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color === selectedColor ? '' : color);
    };

    const handleCostChange = (event) => {
        setSelectedCostRange(event.target.value === selectedCostRange ? '' : event.target.value);
    };

    const handleClick = (productId) => {
        setClickedHearts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    };

    const clearFilters = () => {
        setSelectedSize('');
        setSelectedColor('');
        setSelectedCostRange('');
    };

    const addToCart = (productId) => {
        // Implement your logic to add product to cart here
        console.log(`Product with ID ${productId} added to cart`);
    };

    const filteredProducts = products.filter(filterProducts);

    return (
        <div className="boys">
            <div className="sidebar">
                <div className="slide-bar">
                    <div className="filter-section">
                        <h5>Sizes</h5>
                        {['M', 'L', 'XL'].map(size => (
                            <button
                                key={size}
                                className={selectedSize === size ? 'selected' : ''}
                                onClick={() => handleSizeChange(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <div className="color-section">
                        <h5>Colors</h5>
                        <div className="color-options">
                            {['Red', 'Blue', 'Black', 'Green', 'Yellow', 'Sky Blue', 'Purple'].map(color => (
                                <button
                                    className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color.toLowerCase() }}
                                    key={color}
                                    onClick={() => handleColorChange(color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="cost-section">
                        <h5>Filter by Price</h5>
                        <div className="price-ranges">
                            {['0-10', '10-25', '25-50', '50-100', '100-200', '200-'].map(range => (
                                <label key={range}>
                                    <input
                                        type="radio"
                                        value={range}
                                        name="price"
                                        checked={selectedCostRange === range}
                                        onChange={handleCostChange}
                                    />
                                    {range === '200-' ? '$200 & Above' : `$${range.replace('-', ' to $')}`}
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Additional Filter Options */}
                    <div className="additional-filters">
                        <h5>Neck Type</h5>
                        {/* Add neck type filter options */}
                        <h5>Sleeve Type</h5>
                        {/* Add sleeve type filter options */}
                        <h5>Offers</h5>
                        {/* Add offers filter options */}
                        <h5>Trends</h5>
                        {/* Add trends filter options */}
                        <h5>Fit</h5>
                        {/* Add fit filter options */}
                    </div>
                    <button className="clear-filters" onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
            <div className="Boys-dress">
                <div className="products-container boys-products">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h5 style={{ color: 'black' }}>{product.name}</h5>
                                <p style={{ color: 'black' }}>${product.price.toFixed(2)}</p>
                                <button className="btn btn-add-to-cart" onClick={() => addToCart(product.id)}>Add to Cart</button>
                                <button
                                    className={`btn-heart ${clickedHearts[product.id] ? 'clicked' : ''}`}
                                    onClick={() => handleClick(product.id)}
                                >
                                    <FaHeart color={clickedHearts[product.id] ? 'red' : 'gray'} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: 'black' }}>No products found matching your criteria.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Boys;