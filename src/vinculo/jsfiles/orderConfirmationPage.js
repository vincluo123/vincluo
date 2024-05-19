import React, { useEffect, useState, useMemo } from 'react';
import '../cssfiles/orderConfirmationPage.css';
const ordersGifUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzrZExpuV21yLjxwqFTtezR5PCsqAZ8zcSsApuNeKyg&s";

// Sample order summary data with images
const orderSummaryData = [
  { id: 1, name: "Product 1", quantity: 2, price: 25.00, image: "boys1_shirt.jpg"},
  { id: 2, name: "Product 2", quantity: 1, price: 50.00, image: "boys2_shirt.jpg" },
  // Add more items as needed
];

// Sample recommended products data with images
const recommendedProductsData = [
  { id: 101, name: "sample 1", price: 30.00, image: "BOYS-4_page-0001.jpg" },
  { id: 102, name: "sample 2", price: 35.00, image: "boys3_shirt.jpg" },
  // Add more recommended products as needed
];

const OrderConfirmation = () => {
  const [orderDate, setOrderDate] = useState(new Date());
  const [deliveryDate, setDeliveryDate] = useState(new Date());

  useEffect(() => {
    // Manipulate document object to add meta tags
    const descriptionMetaTag = document.createElement('meta');
    descriptionMetaTag.name = 'description';
    descriptionMetaTag.content = 'Order confirmation details for your recent purchase.';
    document.head.appendChild(descriptionMetaTag);

    const keywordsMetaTag = document.createElement('meta');
    keywordsMetaTag.name = 'keywords';
    keywordsMetaTag.content = 'order confirmation, purchase details, recommended products';
    document.head.appendChild(keywordsMetaTag);

    // Clean up function to remove added meta tags
    return () => {
      document.head.removeChild(descriptionMetaTag);
      document.head.removeChild(keywordsMetaTag);
    };
  }, []);

  useEffect(() => {
    setOrderDate(new Date());
    const calculatedDeliveryDate = new Date(orderDate);
    calculatedDeliveryDate.setDate(calculatedDeliveryDate.getDate() + 5);
    setDeliveryDate(calculatedDeliveryDate);
  }, []);

  const totalAmount = useMemo(() => {
    return orderSummaryData.reduce((total, item) => total + item.quantity * item.price, 0);
  }, [orderSummaryData]);

  const cancelOrder = () => {
    alert("Order canceled successfully!");
  };

  return (
    <>
      <div className="order-confirmation-container">
        <div className="confirmation-header">
          <img src={ordersGifUrl} alt="My Orders GIF" /> {/* GIF imported */}
          <h2>My Orders</h2>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {orderSummaryData.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                {item.name} - Quantity: {item.quantity}, Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-details">
          <h3>Thank you for your order!</h3>
          <p>Your order has been confirmed. Below are the details:</p>
          <ul>
            <li>Order Number: 123456789</li>
            <li>Order Date: {orderDate.toDateString()}</li>
            <li>Delivery Address: 123 Street, City, Country</li>
            <li>Total Amount: ${totalAmount.toFixed(2)}</li>
            <li>Expected Delivery Date: {deliveryDate.toDateString()}</li>
          </ul>
        </div>

        <div className="button-row">
          <button onClick={cancelOrder}>Cancel Order</button>
        </div>

        <div className="recommended-products">
          <h3>You may also like....</h3>
          <ul>
            {recommendedProductsData.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                {product.name} - Price: ${product.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="additional-options">
          <div className="button-row">
            <a href="/track-manage-order">Track and Manage Your Order</a>
          </div>
        </div>

        <div className="customer-support">
          <h3>Customer Support</h3>
          <p>For any inquiries regarding your order, please contact our customer support.</p>
          <p>We are thrilled to have you as our customer!</p>
          <p>Thank you for shopping with us!</p>
          <p>Have a fantastic day!</p>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
