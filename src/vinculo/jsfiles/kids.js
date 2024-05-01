// App.js
import React from 'react';
import '../cssfiles/kids.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
function Kids() {
    const products = [
        {
            id: 1,
            name: "Jeans",
            price: 19.99,
            image: "pant.jpg"
        },
        {
            id: 2,
            name: "Shirt",
            price: 12.99,
            image: "shirt.jpg"
        },
        {
            id: 3,
            name: "Trousers",
            price: 19.99,
            image: "trouser.jpg"
        },
        {
            id: 4,
            name: "Tshirts",
            price: 12.99,
            image: "tshirt.jpg"
        },
        {
            id: 5,
            name: "Track pants",
            price: 19.99,
            image: "pant 2.jpg"
        },
        {
            id: 6,
            name: "Tshirts",
            price: 12.99,
            image: "tshirt 2.jpg"
        },
        {
            id: 7,
            name: "Track pants",
            price: 19.99,
            image: "pant 3.jpg"
        },
        {
            id: 8,
            name: "Track pants",
            price: 12.99,
            image: "socks.jpg"
        },

    ];
    return (
        <div className="App">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="carousel1.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel "
                        src="carousel2.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="carousel3.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <h1 className='catagories-header'>Categories</h1>
            <div className="circle-container">
                <div className="circle">
                    <img src="shirt.jpg" alt="Category 1" />
                    <p>Shirts</p>
                </div>
                <div className="circle">
                    <img src="pant.jpg" alt="Category 2" />
                    <p>Pants</p>
                </div>
                <div className="circle">
                    <img src="tshirt.jpg" alt="Category 3" />
                    <p>T-shirts</p>
                </div>
                <div className="circle">
                    <img src="pant 2.jpg" alt="Category 4" />
                    <p>Track Pants</p>
                </div>
            </div>

            <h1>For you</h1>

            <div className="new-arrival-container">

                <div className="container container-row">
                    {products.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <button className="btn" id='cart-btn' style={{ backgroundColor: '#d9d9d9' }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );


}

export default Kids;