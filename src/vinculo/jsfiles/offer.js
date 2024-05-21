import React from 'react';
import '../cssfiles/offer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import offer from '../jsonfiles/offer.json'; // Import the JSON file


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Offer() {
    const { boysProducts, girlsProducts, kidsProducts } = offer;

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
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="assets/car1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
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
