import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../cssfiles/OrderConfirmpopup.css';

const OrderConfirmationPopup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    // Manipulate document object to add meta tags
    const descriptionMetaTag = document.createElement('meta');
    descriptionMetaTag.name = 'description';
    descriptionMetaTag.content = 'Order confirmation popup for successful order placement.';
    document.head.appendChild(descriptionMetaTag);

    const keywordsMetaTag = document.createElement('meta');
    keywordsMetaTag.name = 'keywords';
    keywordsMetaTag.content = 'order confirmation, order placed, successful order';
    document.head.appendChild(keywordsMetaTag);

    // Clean up function to remove added meta tags
    return () => {
      document.head.removeChild(descriptionMetaTag);
      document.head.removeChild(keywordsMetaTag);
      clearTimeout(timer);
    };
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
