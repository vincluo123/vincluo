// PaymentPage.js
import React, { useState } from 'react';
import '../cssfiles/PaymentPage1.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    alert(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-option">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="COD"
            checked={paymentMethod === 'COD'}
            onChange={handlePaymentChange}
          />
          <label htmlFor="cod">Cash on Delivery (COD)</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="Card"
            checked={paymentMethod === 'Card'}
            onChange={handlePaymentChange}
          />
          <label htmlFor="card">Card Payment</label>
          {paymentMethod === 'Card' && (
            <div className="card-details">
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="Card Holder Name" required />
              <input type="text" placeholder="Expiry Date (MM/YY)" required />
              <input type="text" placeholder="CVV" required />
            </div>
          )}
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="UPI"
            checked={paymentMethod === 'UPI'}
            onChange={handlePaymentChange}
          />
          <label htmlFor="upi">UPI Payment</label>
          {paymentMethod === 'UPI' && (
            <div className="upi-details">
              <input type="text" placeholder="UPI ID" required />
            </div>
          )}
        </div>
        <button type="submit">Proceed to Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
