import React, { useState } from 'react';
import '../cssfiles/Smallgirls.css';
import { FaHeart } from 'react-icons/fa';
// Sample data for products
const products = [
    { id: 1, name: "T-Shirt 1", price: 19.99, size: "M", color: "Red", image: "BOYS-4_page-0001.jpg", fit: "Regular", neck: "Round", sleeve: "Short" },
    { id: 2, name: "T-Shirt 2", price: 12.99, size: "L", color: "Blue", image: "BOYS-5_page-0001.jpg", fit: "Slim", neck: "V-Neck", sleeve: "Long" },
    { id: 3, name: "T-Shirt 3", price: 50.99, size: "XL", color: "Black", image: "BOYS-6_page-0001.jpg", fit: "Regular", neck: "Round", sleeve: "Short" },
    { id: 4, name: "T-Shirt 4", price: 19.99, size: "XL", color: "Black", image: "BOYS-7_page-0001.jpg", fit: "Regular", neck: "Round", sleeve: "Short" },
    { id: 5, name: "T-Shirt 5", price: 19.99, size: "XL", color: "Black", image: "BOYS-8_page-0001.jpg", fit: "Slim", neck: "Round", sleeve: "Short" },
    { id: 6, name: "T-Shirt 6", price: 19.99, size: "XL", color: "Black", image: "BOYS-9_page-0001.jpg", fit: "Regular", neck: "Round", sleeve: "Long" },
    { id: 7, name: "T-Shirt 7", price: 19.99, size: "XL", color: "Black", image: "BOYS-10_page-0001.jpg", fit: "Regular", neck: "V-Neck", sleeve: "Long" },
    { id: 8, name: "T-Shirt 8", price: 19.99, size: "XL", color: "Black", image: "BOYS-11_page-0001.jpg", fit: "Slim", neck: "V-Neck", sleeve: "Short" },
    { id: 9, name: "T-Shirt 9", price: 19.99, size: "XL", color: "Black", image: "BOYS-10_page-0001.jpg", fit: "Regular", neck: "Round", sleeve: "Short" },
    { id: 10, name: "T-Shirt 10", price: 19.99, size: "XL", color: "Black", image: "BOYS-11_page-0001.jpg", fit: "Regular", neck: "Round", sleeve: "Short" },
];

// Sample filter options
const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Red', 'Blue', 'Green', 'Black'];
const costRanges = ['0-20', '21-40', '41-60'];
const sleeves = ['Short', 'Long'];
const fits = ['Regular', 'Slim'];
const neckTypes = ['Round', 'V-Neck'];

const Smallgirls = () => {
    const [filters, setFilters] = useState({
        size: [],
        color: [],
        cost: [],
        sleeve: [],
        fit: [],
        neck: [],
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => {
            const currentFilter = prevFilters[filterType];
            const updatedFilter = currentFilter.includes(value)
                ? currentFilter.filter(item => item !== value)
                : [...currentFilter, value];
            return { ...prevFilters, [filterType]: updatedFilter };
        });
    };

    const filterProducts = () => {
        return products.filter(product => {
            return (
                (filters.size.length === 0 || filters.size.includes(product.size)) &&
                (filters.color.length === 0 || filters.color.includes(product.color)) &&
                (filters.cost.length === 0 || filters.cost.some(range => {
                    const [min, max] = range.split('-').map(Number);
                    return product.cost >= min && product.cost <= max;
                })) &&
                (filters.sleeve.length === 0 || filters.sleeve.includes(product.sleeve)) &&
                (filters.fit.length === 0 || filters.fit.includes(product.fit)) &&
                (filters.neck.length === 0 || filters.neck.includes(product.neck))
            );
        });
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
        <div className="Girls-container">
            <div className="sidebar">
                <h2>Filters</h2>
                <div className="filter-section">
                    <h3>Size</h3>
                    {sizes.map(size => (
                        <label key={size}>
                            <input
                                type="checkbox"
                                checked={filters.size.includes(size)}
                                onChange={() => handleFilterChange('size', size)}
                            />
                            {size}
                        </label>
                    ))}
                </div>
                <div className="filter-section">
                    <h3>Color</h3>
                    {colors.map(color => (
                        <label key={color}>
                            <input
                                type="checkbox"
                                checked={filters.color.includes(color)}
                                onChange={() => handleFilterChange('color', color)}
                            />
                            {color}
                        </label>
                    ))}
                </div>
                <div className="filter-section">
                    <h3>Cost</h3>
                    {costRanges.map(range => (
                        <label key={range}>
                            <input
                                type="checkbox"
                                checked={filters.cost.includes(range)}
                                onChange={() => handleFilterChange('cost', range)}
                            />
                            {range}
                        </label>
                    ))}
                </div>
                <div className="filter-section">
                    <h3>Sleeve</h3>
                    {sleeves.map(sleeve => (
                        <label key={sleeve}>
                            <input
                                type="checkbox"
                                checked={filters.sleeve.includes(sleeve)}
                                onChange={() => handleFilterChange('sleeve', sleeve)}
                            />
                            {sleeve}
                        </label>
                    ))}
                </div>
                <div className="filter-section">
                    <h3>Fit</h3>
                    {fits.map(fit => (
                        <label key={fit}>
                            <input
                                type="checkbox"
                                checked={filters.fit.includes(fit)}
                                onChange={() => handleFilterChange('fit', fit)}
                            />
                            {fit}
                        </label>
                    ))}
                </div>
                <div className="filter-section">
                    <h3>Neck Type</h3>
                    {neckTypes.map(neck => (
                        <label key={neck}>
                            <input
                                type="checkbox"
                                checked={filters.neck.includes(neck)}
                                onChange={() => handleFilterChange('neck', neck)}
                            />
                            {neck}
                        </label>
                    ))}
                </div>
            </div>
            <div className="product-list-container">
                <h1>2-8 Girls</h1>
                {[0, 1].map(rowIndex => (
                    <div className="product-list" key={rowIndex}>
                        {filterProducts().slice(rowIndex * 5, (rowIndex + 1) * 5).map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                                <h6>{product.price}</h6>
                                <button className="btn-heart" onClick={() => handleClick(product.id)}>
                                    <span>
                                        <FaHeart color={clickedHearts[product.id] ? 'red' : 'gray'} />
                                    </span>
                                </button>
                            </div>

                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Smallgirls;