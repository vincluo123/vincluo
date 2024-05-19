// App.js
import React from 'react';
import '../cssfiles/offer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Offer() {
    const products = [
        {
            id: 1,
            name: "T-shirt",
            cname: "combo of 3",
            price: 999,
            image: "offer/combo1.jpg"
        },
        {
            id: 2,
            name: "T-shirt",
            cname: "combo of 2",
            price: 689,
            image: "offer/combo 2.jpeg"
        },
        {
            id: 3,
            name: "T-shirt",
            cname:"pack of 3",
            price: 759,
            image: "boys3_shirt.jpg"
        },
        {
            id: 4,
            name: "T-shirt",
            cname:"combo of 4",
            price: 899,
            image: "BOYS-4_page-0001.jpg"
        },
        {
            id: 5,
            name: "T-shirt",
            cname:"combo of 2",
            price: 500,
            image: "BOYS-5_page-0001.jpg"
        },
        {
            id: 6,
            name: "T-shirt",
            cname:"combo of 5",
            price: 1200,
            image: "BOYS-6_page-0001.jpg"
        },
        {
            id: 7,
            name: "T-shirt",
            cname:"pack of 3",
            price:600,
            image: "BOYS-7_page-0001.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname:"pack of 6",
            price: 1000,
            image: "BOYS-8_page-0001.jpg"
        },
   

    ];

    return (
        <div className="App">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="description" content="Explore exclusive combo offers on boys' clothing. Get the best deals on T-shirts with our affordable bundle packs. Shop now for amazing discounts and limited-time offers!"></meta>
            <meta name="keywords" content="boys clothing, boys T-shirt combos, T-shirt deals, kids clothing discounts, affordable kids clothing, T-shirt bundle offers, exclusive boys clothing offers, boys combo deals, discounted kids wear, T-shirt pack deals"></meta>
            {/* Advertisement */}
            <div className="advertisement">
                <h2>Exclusive Offer!</h2>
                <p>Get flat 30% off on all kids' clothing. Hurry, limited time offer!</p>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="slide 11.gif"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel "
                        src="slide 12.gif"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="slide 11.gif"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* Categories */}
            <h1 className='catagories-header'>Categories</h1>
            {/* Category circles */}
            
            {/* Combo Offers */}
            <h1>Combo Offers</h1>
            <div className="combo-container">
                {products.map(product => (
                    <div className="combo-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="combo-details">
                            <h3>{product.name}</h3>
                            <h6>{product.cname}</h6>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <button className="btn" style={{ backgroundColor: 'skyblue' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
            
            <div className="offer-details">
                {/* Interactive offer details */}
                <h2>Special Offers</h2>
                <ul>
                    <li>Buy 1 get 1 free on all T-shirts!</li>
                    <li>Flat 20% off on all pants. Use code: PANTS20</li>
                    <li>Free shipping on orders above $500!</li>
                </ul>
            </div>
        </div>
    );
}

export default Offer;




