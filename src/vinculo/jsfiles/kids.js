// App.js
import React from 'react';
import '../cssfiles/kids.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import '../jsfiles/footerDesktop.js';
import '../cssfiles/footerDesktop.css';

import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Kids() {
    const [clickedHearts, setClickedHearts] = useState({}); // State to track clicked hearts

    const handleClick = (productId) => {
        setClickedHearts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId] // Toggle the clicked state for the product
        }));

        console.log(productId);

    };
const products = [
        {
            id: 1,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "boys2_shirt.jpg"
        },
        {
            id: 2,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "boys1_shirt.jpg"
        },
        {
            id: 3,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "boys3_shirt.jpg"
        },
        {
            id: 4,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-4_page-0001.jpg"
        },
        {
            id: 5,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-5_page-0001.jpg"
        },
        {
            id: 6,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-6_page-0001.jpg"
        },
        {
            id: 7,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-7_page-0001.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-8_page-0001.jpg"
        },
        {
            id: 9,
            name: "T-shirt",
            cname: "vinculo",
            price: 12.99,
            image: "BOYS-12_page-0001.jpg"
        },
        {
            id: 10,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-9_page-0001.jpg"
        },
        {
            id: 11,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-10_page-0001.jpg"
        },
        {
            id: 12,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-11_page-0001.jpg"
        },
        


    ];

    return (


        <div className="App">
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


            {/* <h1 className='catagories-header'>Categories</h1>
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
            </div> */}

            <h1>KIDS</h1>



<<<<<<< HEAD
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
=======
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8

            <div className="container1">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <h6>{product.cname}</h6>
<<<<<<< HEAD
                        <p>${product.price.toFixed(2)}</p>
<<<<<<< HEAD
                        <button className="btn-cart" >Add to Cart</button>
=======

                        <button className="btn" style={{ backgroundColor: '#B4B4B8' }}>Add to Cart</button>

                        <button className="btn-cart" >Add to Cart</button>

>>>>>>> 1e62644ae847bb524294e1e563c71315ef9db2c8
=======
                        <p>₹{product.price.toFixed(2)}</p>

                        <button className="btn-cart" onClick={() => handleClick(product.id)}>
                            <span>Add to Cart</span>
                            <span style={{ marginLeft: '5px' }}>
                                <FaHeart color={clickedHearts[product.id] ? 'red' : 'black'} />
                            </span>
                        </button>
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
                    </div>
                ))}
            </div>
        </div>

    );

}


export default Kids;



