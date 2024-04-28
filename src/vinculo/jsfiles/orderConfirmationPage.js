import React from 'react';
import '../cssfiles/orderConfirmationPage.css';
import tshirt1 from '../product images/tshirt1.jpg';
import tshirt2 from '../product images/tshirt2.jpeg';
import tshirt3 from '../product images/tshirt3.jpeg';

const OrderConfirmation = () => {
  // Sample order summary data with images
  const orderSummaryData = [
    { id: 1, name: "Product 1", quantity: 2, price: 25.00, image: tshirt1 },
    { id: 2, name: "Product 2", quantity: 1, price: 50.00, image: tshirt2 },
    // Add more items as needed
  ];

  // Sample recommended products data with images
  const recommendedProductsData = [
    { id: 101, name: "Recommended Product 1", price: 30.00, image: tshirt3 },
    { id: 102, name: "Recommended Product 2", price: 35.00, image: tshirt2 },
    // Add more recommended products as needed
  ];

  // Calculate total amount
  const totalAmount = orderSummaryData.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="order-confirmation-container">
      <div className="confirmation-header">
        <h2>Order Confirmation</h2>
      </div>
      <div className="order-details">
        <h3>Thank you for your order!</h3>
        <p>Your order has been confirmed. Below are the details:</p>
        <ul>
          <li>Order Number: 123456789</li>
          <li>Order Date: April 25, 2024</li>
          <li>Delivery Address: 123 Street, City, Country</li>
          <li>Total Amount: ${totalAmount.toFixed(2)}</li>
        </ul>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {orderSummaryData.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /> {/* Image */}
              {item.name} - Quantity: {item.quantity}, Price: ${item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="recommended-products">
        <h3>Recommended Products</h3>
        <ul>
          {recommendedProductsData.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /> {/* Image */}
              {product.name} - Price: ${product.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="customer-support">
        <h3>Customer Support</h3>
        <p>For any inquiries regarding your order, please contact our customer support.</p>
        <p>We are thrilled to have you as our customer!</p>
        <p>Thank you for shopping with us!</p>
        <p>Have a fantastic day!</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
