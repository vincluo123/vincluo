import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/Smallboys.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import products from '../jsonfiles/Smallboys.json';
import { WishlistContext } from '../jsfiles/wishcontext';

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Red', 'Blue', 'Green', 'Black'];
const costRanges = ['0-20', '21-40', '41-60'];
const sleeves = ['Short', 'Long'];
const fits = ['Regular', 'Slim'];
const neckTypes = ['Round', 'V-Neck'];

const Smallboys = () => {
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
        <div className="boys-container">
            <div className="wishlist-icon-container">
                <FaShoppingCart onClick={handleWishlistIconClick} className="wishlist-icon" />
            </div>
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
                <h1>2-8 Boys</h1>
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
        </div>
    );
};

export default Smallboys;









