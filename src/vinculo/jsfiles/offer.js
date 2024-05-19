// App.js
import React from 'react';
import '../cssfiles/offer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Offer() {
    const boysProducts = [
        {
            id: 1,
            name: "T-shirt",
            cname: "combo of 3",
            price: 999,
            image: "offer/boys/combo1.jpg"
        },
        {
            id: 2,
            name: "T-shirt",
            cname: "combo of 2",
            price: 689,
            image: "offer/boys/combo 2.jpeg"
        },
        {
            id: 3,
            name: "T-shirt",
            cname: "pack of 3",
            price: 759,
            image: "offer/boys/combo 3.jpg"
        },
        {
            id: 4,
            name: "T-shirt",
            cname: "combo of 4",
            price: 899,
            image: "offer/boys/combo5.jpg"
        },
        {
            id: 5,
            name: "T-shirt",
            cname: "combo of 2",
            price: 500,
            image: "offer/boys/combo 2.jpeg"
        },
        {
            id: 6,
            name: "T-shirt",
            cname: "combo of 3",
            price: 1200,
            image: "offer/boys/combo 3.jpg"
        },
        {
            id: 7,
            name: "T-shirt",
            cname: "pack of 3",
            price: 600,
            image: "offer/boys/combo 3.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname: "pack of 4",
            price: 1000,
            image: "offer/boys/combo5.jpg"
        }
    ];

    const girlsProducts = [
        {
            id: 9,
            name: "Dress",
            cname: "combo of 3",
            price: 1299,
            image: "offer/girls/combo of 3.jpeg"
        },
        {
            id: 10,
            name: "Dress",
            cname: "combo of 2",
            price: 899,
            image: "offer/girls/combo of 2.jpg"
        },
        {
            id: 11,
            name: "Dress",
            cname: "pack of 3",
            price: 1099,
            image: "offer/girls/combo of 3.jpeg"
        },
        {
            id: 12,
            name: "Dress",
            cname: "combo of 4",
            price: 1399,
            image: "offer/girls/combo of 4.jpg"
        },
        {
            id: 13,
            name: "Dress",
            cname: "combo of 2",
            price: 799,
            image: "offer/girls/combo of 2.jpg"
        },
        {
            id: 14,
            name: "Dress",
            cname: "combo of 4",
            price: 1599,
            image: "offer/girls/combo of 4.jpg"
        },
        {
            id: 15,
            name: "Dress",
            cname: "pack of 3",
            price: 999,
            image: "offer/girls/combo of 3.jpeg"
        },
        {
            id: 16,
            name: "Dress",
            cname: "pack of 4",
            price: 1999,
            image: "offer/girls/combo of 4.jpg"
        }
    ];

    const kidsProducts = [
        {
            id: 17,
            name: "Kids T-shirt",
            cname: "combo of 3",
            price: 799,
            image: "offer/kids/combo of 3.jpg"
        },
        {
            id: 18,
            name: "Kids T-shirt",
            cname: "combo of 2",
            price: 599,
            image: "offer/kids/combo of 2.jpeg"
        },
        {
            id: 19,
            name: "Kids T-shirt",
            cname: "pack of 3",
            price: 699,
            image: "offer/kids/combo of 3.jpg"
        },
        {
            id: 20,
            name: "Kids T-shirt",
            cname: "combo of 4",
            price: 899,
            image: "offer/kids/combo of 4.jpg"
        },
        {
            id: 21,
            name: "Kids T-shirt",
            cname: "combo of 2",
            price: 499,
            image: "offer/kids/combo of 2.jpeg"
        },
        {
            id: 22,
            name: "Kids T-shirt",
            cname: "combo of 4",
            price: 1099,
            image: "offer/kids/combo of 4.jpg"
        },
        {
            id: 23,
            name: "Kids T-shirt",
            cname: "pack of 3",
            price: 649,
            image: "offer/kids/combo of 3.jpg"
        },
        {
            id: 24,
            name: "Kids T-shirt",
            cname: "pack of 2",
            price: 1299,
            image: "offer/kids/combo of 2.jpeg"
        }
    ];

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
