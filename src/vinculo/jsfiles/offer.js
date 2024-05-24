import React from 'react';
import '../cssfiles/offer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import offer from '../jsonfiles/offer.json'; // Import the JSON file


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Offer() {
<<<<<<< HEAD
    const { boysProducts, girlsProducts, kidsProducts } = offer;
=======
    const products = [
        {
            id: 1,
            name: "T-shirt",
            cname: "combo of 3",
            price: 999,
            image: "boys2_shirt.jpg"
        },
        {
            id: 2,
            name: "T-shirt",
            cname: "combo of 2",
            price: 689,
            image: "boys1_shirt.jpg"
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
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8

    return (
        <div className="App">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="description" content="Explore exclusive combo offers on boys, girls, and kids clothing. Get the best deals on T-shirts and dresses with our affordable bundle packs."></meta>
            <meta name="keywords" content="boys T-shirt combo offers, girls dress combo deals, kids clothing discounts, exclusive kids clothing offers, T-shirt pack deals, dress pack offers, kids clothing sale, affordable kids clothing bundles, discounted kids wear, combo deals on kids clothing"></meta>
            {/* Advertisement */}
            <div className="advertisement">
                <h2>Exclusive Offer!</h2>
                <p>Get flat 30% off on all kids' clothing. Hurry, limited time offer!</p>
            </div>
            
            <Carousel>
                {/* Carousel items */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carousel1.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carousel2.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carousel3.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
<<<<<<< HEAD
                        className="carousel"
                        src="assets/car1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
=======
                        className="d-block w-100"
                        src="carousel1.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carousel2.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                {/* Add more Carousel items as needed */}
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
            </Carousel>

            {/* Categories */}
            <h1 className='catagories-header'>Offer for you</h1>
            {/* Category circles */}
            
            {/* Combo Offers */}
            <h1>Boys</h1>
            <div className="combo-container">
                {boysProducts.map(product => (
                    <div className="combo-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="combo-details">
                            <h3>{product.name}</h3>
                            <h6>{product.cname}</h6>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
<<<<<<< HEAD
                        <button className="btn" style={{ backgroundColor: '#D4AF37' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <h1>Girls</h1>
            <div className="combo-container">
                {girlsProducts.map(product => (
                    <div className="combo-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="combo-details">
                            <h3>{product.name}</h3>
                            <h6>{product.cname}</h6>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <button className="btn" style={{ backgroundColor: '#D4AF37' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <h1>Kids</h1>
            <div className="combo-container">
                {kidsProducts.map(product => (
                    <div className="combo-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="combo-details">
                            <h3>{product.name}</h3>
                            <h6>{product.cname}</h6>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                        <button className="btn" style={{ backgroundColor: '#D4AF37' }}>Add to Cart</button>
=======
                        <button className="btn" style={{ backgroundColor: 'blue' }}>Add to Cart</button>
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
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
