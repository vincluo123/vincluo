import React, { useState } from 'react';
import '../cssfiles/cart.css';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1, image: "boys1_shirt.jpg" },
    { id: 2, name: 'Product 2', price: 15, quantity: 1, image: "boys2_shirt.jpg" },
    { id: 3, name: 'Product 3', price: 20, quantity: 1, image: "BOYS-4_page-0001.jpg" },
  ]);
  const [buyLaterItems, setBuyLaterItems] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({});
  const [couponCode, setCouponCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

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

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    // Add logic for checkout process
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
            {/* Item Info */}
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
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
                <p className="subtotal">Subtotal: ${calculateSubtotal(item)}</p>
              </div>
            </div>
            {/* Buttons */}
            <div className="buttons">
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button className="buy-later-button" onClick={() => handleBuyLater(item.id)}>Buy Later</button>
            </div>
          </div>
        ))}
      </div>
      {/* Total and Checkout Buttons */}
      {cartItems.length > 0 && (
        <>
          <div className="total">
            <h2>Total: ${calculateTotal()}</h2>
            <button onClick={handleRemoveAll}>Remove All</button>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ${calculateTotal()}</p>
            <p>Shipping: Free</p>
            <p>Total: ${calculateTotal()}</p>
          </div>
          {/* Shipping Information */}
          <div className="shipping-info">
            <h2>Shipping Information</h2>
            {/* Add form fields for shipping information */}
          </div>
          {/* Payment Options */}
          <div className="payment-options">
            <h2>Payment Options</h2>
            {/* Add payment method selection */}
          </div>
          {/* Discount Coupon */}
          <div className="discount-coupon">
            <input type="text" placeholder="Enter Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
            <button>Apply</button>
          </div>
          {/* Delivery Time */}
          <div className="delivery-time">
            <p>Estimated Delivery Time: 3-5 business days</p>
          </div>
        </>
      )}
      {/* Buy Now Button */}
      <div className="buy-now">
        <button onClick={handleCheckout}>Buy Now</button>
      </div>
      {/* Return Policy */}
      <div className="return-policy">
            <h2>Return Policy</h2>
            <p>30-day return policy. Terms & conditions apply.</p>
          </div>
          {/* Customer Support */}
          <div className="customer-support">
            <h2>Customer Support</h2>
            <p>Contact us: support@example.com | 1-800-123-4567</p>
          </div>
      {/* Buy Later Section */}
      {buyLaterItems.length > 0 && (
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
      )}
    </div>
  );
};

export default CartPage;