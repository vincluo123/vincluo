// App.js
import React from 'react';

import '../cssfiles/infantgirls.css';
import productsData from '../json files/products.json';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Infantgirls() {
    const [products, setProducts] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [showPriceFilter, setShowPriceFilter] = useState(false);
    const [showSizeFilters, setShowSizeFilters] = useState(false);
    const [showColorFilters, setShowColorFilters] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const zeroOrOneRowOfProducts = filteredProducts.length <= 6;
    const contentHeight = window.innerHeight - 200;
    const [selectedFit, setSelectedFit] = useState('');
    const fits = ['Regular', 'Slim', 'Comfort'];
    const [showFitFilters, setShowFitFilters] = useState(false); // Define showFitFilters state
    const [selectedNeckTypes, setSelectedNeckTypes] = useState([]);
    const [showNeckTypeFilters, setShowNeckTypeFilters] = useState(false);
    const [selectedSleeveTypes, setSelectedSleeveTypes] = useState([]);
    const [showSleeveTypeFilters, setShowSleeveTypeFilters] = useState(false);


    const toggleFitFilters = () => { // Define toggleFitFilters function
    setShowFitFilters(!showFitFilters);
};
const toggleNeckTypeFilters = () => {
    setShowNeckTypeFilters(!showNeckTypeFilters);
};

const toggleSleeveTypeFilters = () => {
    setShowSleeveTypeFilters(!showSleeveTypeFilters);
};
const handleSleeveTypeChange = (sleeveType) => {
    setSelectedSleeveTypes((prevSleeveTypes) =>
        prevSleeveTypes.includes(sleeveType)
            ? prevSleeveTypes.filter((prevType) => prevType !== sleeveType)
            : [...prevSleeveTypes, sleeveType]
    );
};

    // Calculate the margin dynamically based on the condition
    const comboContainerMargin = zeroOrOneRowOfProducts ? contentHeight + 'px' : '20px';
    const toggleSizeFilters = () => {
        setShowSizeFilters(!showSizeFilters);
    };
    const toggleColorFilters = () => {
        setShowColorFilters(!showColorFilters);
    };
    const handlePriceChange = (event) => {
        const { id, value } = event.target;
        if (id === 'minPrice') {
            setMinPrice(parseInt(value));
        } else if (id === 'maxPrice') {
            setMaxPrice(parseInt(value));
        }
    };
    const togglePriceFilter = () => {
        setShowPriceFilter(!showPriceFilter);
    };
    useEffect(() => {
        const applyFilters = () => {
        const filtered = products.filter(product => {
            // Filter by size
            if (selectedSize.length > 0 && !selectedSize.includes(product.size)) {
                return false;
            }
            // Filter by color
            if (selectedColor.length > 0 && !selectedColor.includes(product.color)) {
                return false;
            }
            // Filter by price range
            if (product.price < minPrice || product.price > maxPrice) {
                return false;
            }
            if (selectedFit.length > 0 && !selectedFit.includes(product.fit)) {
                return false;
            }
            if (selectedNeckTypes.length > 0 && !selectedNeckTypes.includes(product.neckType)) {
                return false;
            }
            if (selectedSleeveTypes.length > 0 && !selectedSleeveTypes.includes(product.sleeveType)) {
                return false;
            }
            return true;
        });
        setFilteredProducts(filtered);
    };
    applyFilters(); // Call applyFilters inside useEffect

    return () => {
        // Cleanup function if needed
    };
}, [selectedSize, selectedColor, minPrice, maxPrice, filteredProducts, selectedFit, products,selectedNeckTypes,selectedSleeveTypes]);
    const handleNeckTypeChange = (neckType) => {
        setSelectedNeckTypes((prevNeckTypes) =>
            prevNeckTypes.includes(neckType)
                ? prevNeckTypes.filter((prevNeckType) => prevNeckType !== neckType)
                : [...prevNeckTypes, neckType]
        );
    };

    
    useEffect(() => {
        setProducts(productsData); // Set product data from JSON to state
    }, []);
    

    const [clickedHearts, setClickedHearts] = useState({}); // State to track clicked hearts

    const handleClick = (productId) => {
        setClickedHearts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId] // Toggle the clicked state for the product
        }));

        console.log(productId);

    };



const handleSizeChange = (size) => {
    setSelectedSize((prevSizes) =>
        prevSizes.includes(size)
            ? prevSizes.filter((prevSize) => prevSize !== size)
            : [...prevSizes, size]
    );
};

// Function to handle color change
const handleColorChange = (color) => {
    setSelectedColor((prevColors) =>
        prevColors.includes(color)
            ? prevColors.filter((prevColor) => prevColor !== color)
            : [...prevColors, color]
    );
};
const handleFitChange = (fit) => {
    setSelectedFit(fit);
};




    return (
        <div className="App">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="slide 11.gif"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel "
                        src="slide 12.gif"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="slide 11.gif"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
           

            
            {/* Combo Offers */}
            <h1>Infant Girls</h1>
            <div className="boys">
            <div className="sidebar">
                <h3>Filters
                    
                </h3>
            <button className="filter-toggle" onClick={toggleSizeFilters}>
                <span>Sizes</span>
                <span>{showSizeFilters ? ' ▲ ' : ' ▼ '}</span>
            </button>
            {showSizeFilters && (
                <div className="filter-options">
                    <div className="filter-section">
                        <h5>Sizes</h5>
                        <div className="checkboxes">
                            <label>
                                <input type="checkbox" value="M" onChange={(e) => handleSizeChange(e.target.value)} />
                                M
                            </label>
                            <label>
                                <input type="checkbox" value="L" onChange={(e) => handleSizeChange(e.target.value)} />
                                L
                            </label>
                            <label>
                                <input type="checkbox" value="XL" onChange={(e) => handleSizeChange(e.target.value)} />
                                XL
                            </label>
                        </div>
                    </div>
                    {/* Similar sections for colors, price ranges, etc. */}
                </div>
            )}
        
            <button className="filter-toggle-colors" onClick={toggleColorFilters}>
                <span>Colors</span>
                <span>{showColorFilters ? '▲' : '▼'}</span>
            </button>
            {showColorFilters && (
        <div className="filter-section-color">
    <h5>Colors</h5>
    <div className="color-options">
        <div className="checkbox-container">
            <label>
                <input type="checkbox" style={{ display: 'none' }} onChange={() => handleColorChange('red')} />
                <span className="color-checkbox" style={{ backgroundColor: 'red' }}></span>
                Red
            </label>
            <label>
                <input type="checkbox" style={{ display: 'none' }} onChange={() => handleColorChange('blue')} />
                <span className="color-checkbox" style={{ backgroundColor: 'blue' }}></span>
                Blue
            </label>
            <label>
                <input type="checkbox" style={{ display: 'none' }} onChange={() => handleColorChange('yellow')} />
                <span className="color-checkbox" style={{ backgroundColor: 'yellow' }}></span>
                Yellow
            </label>
            <label>
                <input type="checkbox" style={{ display: 'none' }} onChange={() => handleColorChange('pink')} />
                <span className="color-checkbox" style={{ backgroundColor: 'pink' }}></span>
                Pink
            </label>
            <label>
                <input type="checkbox" style={{ display: 'none' }} onChange={() => handleColorChange('green')} />
                <span className="color-checkbox" style={{ backgroundColor: 'green' }}></span>
                Green
            </label>
            <label>
                <input type="checkbox" style={{ display: 'none' }} onChange={() => handleColorChange('orange')} />
                <span className="color-checkbox" style={{ backgroundColor: 'orange' }}></span>
                Orange
            </label>
            {/* Add similar labels for other colors */}
        </div>
    </div>
</div>
            )}
            
            <button className="filter-toggle-price" onClick={togglePriceFilter}>
                <span>Price Range</span>
                <span>{showPriceFilter ? '▲' : '▼'}</span>
            </button>
            {showPriceFilter && (
                <div className="filter-options-price">
                    <h5>Select Range</h5>
                    <Form>
                        <Form.Group controlId="minPrice">
                            <Form.Label>Minimum Price: ${minPrice}</Form.Label>
                            <Form.Range
                                min={0}
                                max={1000}
                                value={minPrice}
                                onChange={handlePriceChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="maxPrice">
                            <Form.Label>Maximum Price: ${maxPrice}</Form.Label>
                            <Form.Range
                                min={0}
                                max={1000}
                                value={maxPrice}
                                onChange={handlePriceChange}
                            />
                        </Form.Group>
                    </Form>
                </div>
            )}
    <button className="filter-toggle-fits" onClick={toggleFitFilters}>
    <span>Fit</span>
    <span>{showFitFilters ? '▲' : '▼'}</span>
</button>
     {showFitFilters && (
    <div className="filter-options-fits">
        <h5>Fits</h5>
        <div className="checkboxes">
            {fits.map(fit => (
                <label key={fit}>
                    <input type="checkbox" value={fit} onChange={() => handleFitChange(fit)} />
                    {fit}
                </label>
            ))}
        </div>
    </div>
)}
<button className="filter-toggle-neck-types" onClick={toggleNeckTypeFilters}>
    <span>Neck Types</span>
    <span>{showNeckTypeFilters ? '▲' : '▼'}</span>
</button>
{showNeckTypeFilters && (
    <div className="filter-options-neck-types">
        <h5>Neck Types</h5>
        <div className="checkboxes">
            <label>
                <input type="checkbox" value="Round Neck" onChange={() => handleNeckTypeChange('Round Neck')} />
                Round Neck
            </label>
            {/* Add similar labels for other neck types */}
        </div>
    </div>
)}
<button className="filter-toggle-sleeve-type" onClick={toggleSleeveTypeFilters}>
    <span>Sleeve Type</span>
    <span>{showSleeveTypeFilters ? '▲' : '▼'}</span>
</button>
{showSleeveTypeFilters && (
    <div className="filter-options-sleeve-type">
        <h5>Sleeve Type</h5>
        <div className="checkboxes">
            <label>
                <input type="checkbox" value="Short" onChange={() => handleSleeveTypeChange('Short')} />
                Short
            </label>
            <label>
                <input type="checkbox" value="Long" onChange={() => handleSleeveTypeChange('Long')} />
                Long
            </label>
            {/* Add more labels for other sleeve types */}
        </div>
    </div>
)}
            
            </div>
            



        </div>
            <div className="combo-container" style={{ marginBottom: comboContainerMargin }}>
            {filteredProducts.map(product => (
                    <div className="combo-card" key={product.id}>
                         <button className="btn-heart" onClick={() => handleClick(product.id)}>      
                            <span >
                                <FaHeart color={clickedHearts[product.id] ? 'red' : 'black'} />
                            </span>
                        </button>
                        <img src={product.image} alt={product.name} />
                        
                        <div className="combo-details">
                            <h3>{product.name}</h3>
                            <h6>{product.cname}</h6>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <button className="btn" style={{ backgroundColor: 'skyblue' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="combo-container" style={{ marginBottom: comboContainerMargin }}>
                
              
            </div>
            

        </div>
    );
}

export default Infantgirls;




