// App.js
import React from 'react';
import '../cssfiles/infantgirls.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Infantgirls() {
    const products = [
        {
            id: 1,
            name: "T-shirt",
            cname: "combo of 3",
            price: 999,
            image: "girl1.jpg"
        },
        {
            id: 2,
            name: "T-shirt",
            cname: "combo of 2",
            price: 689,
            image: "girl2.jpg"
        },
        {
            id: 3,
            name: "T-shirt",
            cname:"pack of 3",
            price: 759,
            image: "girl3.jpg"
        },
        {
            id: 4,
            name: "T-shirt",
            cname:"combo of 4",
            price: 899,
            image: "girl4.jpg"
        },
        {
            id: 5,
            name: "T-shirt",
            cname:"combo of 2",
            price: 500,
            image: "girl2.jpg"
        },
        {
            id: 6,
            name: "T-shirt",
            cname:"combo of 5",
            price: 1200,
            image: "girl4.jpg"
        },
        {
            id: 7,
            name: "T-shirt",
            cname:"pack of 3",
            price:600,
            image: "girl3.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname:"pack of 6",
            price: 1000,
            image: "girl1.jpg"
        },
        
        
   

    ];
    
    const products1 = [
        {
            id: 9,
            name: "T-shirt",
            cname: "combo of 3",
            price: 999,
            image: "girl3.jpg"
        },
        {
            id: 10,
            name: "T-shirt",
            cname: "combo of 2",
            price: 689,
            image: "girl1.jpg"
        },
        {
            id: 11,
            name: "T-shirt",
            cname:"pack of 3",
            price: 759,
            image: "girl4.jpg"
        },
        {
            id: 12,
            name: "T-shirt",
            cname:"combo of 4",
            price: 899,
            image: "girl2.jpg"
        },
        {
            id: 13,
            name: "T-shirt",
            cname:"combo of 2",
            price: 500,
            image: "girl1.jpg"
        },
        {
            id: 14,
            name: "T-shirt",
            cname:"combo of 5",
            price: 1200,
            image: "girl4.jpg"
        },
        {
            id: 15,
            name: "T-shirt",
            cname:"pack of 3",
            price:600,
            image: "girl3.jpg"
        },
        {
            id: 16,
            name: "T-shirt",
            cname:"pack of 6",
            price: 1000,
            image: "girl1.jpg"
        },
   

    ];
    const [clickedHearts, setClickedHearts] = useState({}); // State to track clicked hearts

    const handleClick = (productId) => {
        setClickedHearts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId] // Toggle the clicked state for the product
        }));

        console.log(productId);

    };

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

            
            {/* Combo Offers */}
            <h1>Infant Girls</h1>
            <div className="combo-container">
                {products.map(product => (
                    <div className="combo-card" key={product.id}>
                         <button className="btn-heart" onClick={() => handleClick(product.id)}>      
                            <span >
                                <FaHeart color={clickedHearts[product.id] ? 'red' : 'black'} />
                            </span>
                        </button>
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
            <div className="combo-container">
                {products1.map(products1 => (
                    
                    <div className="combo-card" key={products1.id}>
                         <button className="btn-heart" onClick={() => handleClick(products1.id)}>      
                            <span >
                                <FaHeart color={clickedHearts[products1.id] ? 'red' : 'black'} />
                            </span>
                        </button>   
                        <img src={products1.image} alt={products1.name} />
                        <div className="combo-details">
                            <h3>{products1.name}</h3>
                            <h6>{products1.cname}</h6>
                            <p>${products1.price.toFixed(2)}</p>
                        </div>
                        <button className="btn" style={{ backgroundColor: 'skyblue' }}>Add to Cart</button>
                       
                    </div>
                ))}
            </div>
            

        </div>
    );
}

export default Infantgirls;




