import '../cssfiles/cart.css';
import React, { useState } from 'react';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    { id: 3, name: 'Product 3', price: 20, quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
          </div>
          <div className="quantity">
            <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${item.id}`}
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
          </div>
        </div>
      ))}
      <div className="total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default CartPage;
