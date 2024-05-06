import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaHeart, FaTrash, FaShoppingCart } from 'react-icons/fa';
import '../cssfiles/girlsSection.css'; // Import CSS file for girls section
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Girls = () => {
  return (
    <><h1 className="girls-title">
      <span className="girls-title-text">Girls Section</span>
    </h1>
    <div className="girls-page">
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="girlsbanner1.jpg"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="girlsbanner2.jpg"
              alt="Second slide" />
          </Carousel.Item>
        </Carousel>

        {/* Replace the wishlist logic with Girls content */}
        <div className="girls-items">
          <div className="girls-card">
            <img src="girl1.jpg" alt="Cotton T-shirt (Black)" className="girls-card-image" />
            <div className="girls-card-details">
              <h3 className="girls-card-name">Cotton T-shirt (Black)</h3>
              <p className="girls-card-price">$20</p>
            </div>
            <div className="girls-card-buttons">
              <button className="girls-card-remove" onClick={() => console.log("Remove")}>
                <FaTrash className="girls-button-icon" />
                Remove
              </button>
              <button className="girls-card-add-to-cart" onClick={() => console.log("Add to Cart")}>
                <FaShoppingCart className="girls-button-icon" />
                Add to Cart
              </button>
            </div>
          </div>
          {/* Add more girl items as needed */}
        </div>
        
      </div></>
  );
};

export default Girls;
