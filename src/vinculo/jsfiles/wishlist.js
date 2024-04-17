import React, { useState } from 'react';
import '../cssfiles/wishlist.css';
import { FaHeart, FaTrash, FaShoppingCart } from 'react-icons/fa';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Cotton T-shirt (Black)', price: 20, image: 'tshirt6.jpg' },
    { id: 2, name: 'Plain T-shirt (Yellow)', price: 30, image: 'tshirt7.jpg' },
    { id: 3, name: 'Plain T-shirt(White)', price: 25, image: 'tshirt8.jpg' },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const addToCart = (id) => {
    // You can implement the logic to add the item to the cart here
    console.log(`Added item with ID ${id} to cart`);
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">
        <span className="wishlist-title-text">My Wishlist</span> <FaHeart className="wishlist-icon" />
      </h1>
      {wishlist.length === 0 ? (
        <p className="wishlist-empty">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map(item => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-card-image" />
              <div className="wishlist-card-details">
                <h3 className="wishlist-card-name">{item.name}</h3>
                <p className="wishlist-card-price">${item.price}</p>
              </div>
              <div className="wishlist-card-buttons">
                <button className="wishlist-card-remove" onClick={() => removeFromWishlist(item.id)}>
                  <FaTrash className="wishlist-button-icon" />
                  Remove
                </button>
                <button className="wishlist-card-add-to-cart" onClick={() => addToCart(item.id)}>
                  <FaShoppingCart className="wishlist-button-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
