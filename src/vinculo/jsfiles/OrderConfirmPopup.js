import React, { useEffect } from 'react';
import '../cssfiles/OrderConfirmpopup.css';

const OrderConfirmationPopup = ({ orderDetails, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(); // Automatically close the popup after 5 minutes
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, [onClose]);

  useEffect(() => {
    console.log(typeof onClose); // Debug: Check the type of onClose
  }, [onClose]);

  const calculateTotal = () => {
    return orderDetails.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleClose = (e) => {
    if (e.target.className.includes('overlay') || e.target.tagName === 'BUTTON') {
      onClose();
    }
  };

  return (
    <div className="order-confirmation-popup" onClick={handleClose}>
      <div className="overlay" aria-label="Close popup"></div>
      <div className="popup-content" role="dialog" aria-labelledby="popup-title">
        <img src="https://cdn.dribbble.com/users/4358240/screenshots/14825308/media/84f51703b2bfc69f7e8bb066897e26e0.gif" alt="Confirmation Animation" />
        <h2 id="popup-title">Your order is placed</h2>
        <p>Thank you for shopping with us!</p>
        {orderDetails && orderDetails.length > 0 && (
          <>
            <p>Your order details:</p>
            <ul>
              {orderDetails.map((item, index) => (
                <li key={index}>
                  {item.quantity} x {item.name} - ${item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p className="total-amount">Total: ${calculateTotal()}</p>
          </>
        )}
        <button onClick={onClose} aria-label="Close Order Confirmation">Close</button>
      </div>
    </div>
  );
};

export default OrderConfirmationPopup;
