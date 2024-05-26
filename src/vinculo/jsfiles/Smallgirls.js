import React, { useContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../cssfiles/Smallgirls.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import products from '../jsonfiles/Smallgirls.json';
import { WishlistContext } from '../jsfiles/wishcontext';
import ViewDetails from '../jsfiles/viewdetails';
import WishlistPage from '../jsfiles/wishlist';

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
    const { wishlist, addToWishlist, removeFromWishlist, notification } = useContext(WishlistContext);
    const [clickedHearts, setClickedHearts] = useState({});
    const navigate = useNavigate();

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
                (filters.size.length === 0 || filters.size.includes(product.Size)) &&
                (filters.color.length === 0 || filters.color.includes(product.color)) &&
                (filters.cost.length === 0 || filters.cost.some(range => {
                    const [min, max] = range.split('-').map(Number);
                    return product.price >= min && product.price <= max;
                })) &&
                (filters.sleeve.length === 0 || filters.sleeve.includes(product.sleevetype)) &&
                (filters.fit.length === 0 || filters.fit.includes(product.fit)) &&
                (filters.neck.length === 0 || filters.neck.includes(product.necktype))
            );
        });
    };

    const handleClick = (product) => {
        navigate('/viewdetails', { state: { product } });
    };

    const handleWishlistClick = (product, e) => {
        e.stopPropagation();
        setClickedHearts(prevState => ({
            ...prevState,
            [product.id]: !prevState[product.id]
        }));

        if (!clickedHearts[product.id]) {
            addToWishlist(product);
        } else {
            removeFromWishlist(product.id);
        }
    };

    const handleWishlistIconClick = () => {
        navigate('/wishlist');
    };

    return (
        <div className="girls-container">
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="wishlist-icon-container">
                            <FaShoppingCart onClick={handleWishlistIconClick} className="wishlist-icon" />
                        </div>
                        <div className="sidebar">
                            <h2>Filters</h2>
                            <div class="filter-section">
                                <div class="filter-select">
                                    <label htmlFor="size-filter">Size:</label>
                                    <select id="size-filter" onChange={(e) => handleFilterChange('size', e.target.value)}>
                                        <option value="">Size</option>
                                        {sizes.map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="filter-select">
                                    <label htmlFor="color-filter">Color:</label>
                                    <select id="color-filter" onChange={(e) => handleFilterChange('color', e.target.value)}>
                                        <option value="">Color</option>
                                        {colors.map(color => (
                                            <option key={color} value={color}>{color}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="filter-select">
                                    <label htmlFor="cost-filter">Cost:</label>
                                    <select id="cost-filter" onChange={(e) => handleFilterChange('cost', e.target.value)}>
                                        <option value="">Cost</option>
                                        {costRanges.map(range => (
                                            <option key={range} value={range}>{range}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="filter-select">
                                    <label htmlFor="sleeve-filter">Sleeve:</label>
                                    <select id="sleeve-filter" onChange={(e) => handleFilterChange('sleeve', e.target.value)}>
                                        <option value="">Sleeve</option>
                                        {sleeves.map(sleeve => (
                                            <option key={sleeve} value={sleeve}>{sleeve}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="filter-select">
                                    <label htmlFor="fit-filter">Fit:</label>
                                    <select id="fit-filter" onChange={(e) => handleFilterChange('fit', e.target.value)}>
                                        <option value="">Fit</option>
                                        {fits.map(fit => (
                                            <option key={fit} value={fit}>{fit}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="filter-select">
                                    <label htmlFor="neck-filter">Neck Type:</label>
                                    <select id="neck-filter" onChange={(e) => handleFilterChange('neck', e.target.value)}>
                                        <option value="">Neck Type</option>
                                        {neckTypes.map(neck => (
                                            <option key={neck} value={neck}>{neck}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="product-list-container">
                            <h1>2-8 Girls</h1>
                            {notification && <div className="notification">{notification}</div>}
                            {[0, 1].map(rowIndex => (
                                <div className="product-list" key={rowIndex}>
                                    {filterProducts().slice(rowIndex * 5, (rowIndex + 1) * 5).map(product => (
                                        <div className="product-card" key={product.id} onClick={() => handleClick(product)}>
                                            <img src={product.image} alt={product.name} />
                                            <h4>{product.name}</h4>
                                            <h6>{product.price}</h6>
                                            <button className="btn-heart" onClick={(e) => handleWishlistClick(product, e)}>
                                                <span>
                                                    <FaHeart color={clickedHearts[product.id] ? 'red' : 'gray'} />
                                                </span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                } />
                <Route path="/viewdetails" element={<ViewDetails />} />
                <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
        </div>
    );
};

export default Smallgirls;
