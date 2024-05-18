import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../cssfiles/OrderConfirmpopup.css';

const OrderConfirmationPopup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={handleClose}>&times;</button>
        <FaCheckCircle className="popup-icon" />
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order is being processed.</p>
      </div>
    </div>
  );
};

export default OrderConfirmationPopup;
