import React, { useState } from 'react';
import '../cssfiles/cart.css';
import tshirt from '../cart images/tshirt.jpeg'; 
import tshirt1 from '../cart images/tshirt1.jpg';
import tshirt2 from '../cart images/tshirt2.jpeg';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1, image: tshirt },
    { id: 2, name: 'Product 2', price: 15, quantity: 1, image: tshirt1 },
    { id: 3, name: 'Product 3', price: 20, quantity: 1, image: tshirt2 },
  ]);
  const [buyLaterItems, setBuyLaterItems] = useState([]);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleBuyLater = (id) => {
    const itemToMove = cartItems.find(item => item.id === id);
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    setBuyLaterItems([...buyLaterItems, itemToMove]);
  };

  const handleAddToCart = (id) => {
    const itemToMove = buyLaterItems.find(item => item.id === id);
    const updatedBuyLaterItems = buyLaterItems.filter(item => item.id !== id);
    setBuyLaterItems(updatedBuyLaterItems);
    setCartItems([...cartItems, itemToMove]);
  };

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
    } else {
      // Add logic to handle buy now action
      alert('Buy Now clicked');
    }
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 && (
        <div className="empty-cart-message">Your cart is empty.</div>
      )}
      <div className="cart-section">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-details">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-price">Price: ${item.price}</p>
                <div className="quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={item.quantity}
                    // Add functionality to handle quantity change
                  />
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button className="buy-later-button" onClick={() => handleBuyLater(item.id)}>Buy Later</button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="total">
            <h2>Total: ${calculateTotal(cartItems)}</h2>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
        </>
      )}
      <div className="buy-later-section">
        <h2>Buy Later</h2>
        {buyLaterItems.map(item => (
          <div key={item.id} className="buy-later-item">
            <div className="item-info">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-details">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-price">Price: ${item.price}</p>
              </div>
            </div>
            <div className="buttons">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
