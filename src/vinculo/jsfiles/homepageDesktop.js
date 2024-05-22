// App.js
import React, { useState, useEffect } from 'react';
import '../cssfiles/homepageDesktop.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
<<<<<<< HEAD
import { FaHeart } from 'react-icons/fa';
function Home() {

    const products = [
        {
            id: 1,
            name: "Tshirt",
            price: 19.99,
            image: "./assets/tshirt4.avif"
        },
        {
            id: 2,
            name: "Tshirt",
            price: 12.99,
            image: "./assets/tshirt9.jpg"
        },
        {
            id: 3,
            name: "Tshirt",
            price: 19.99,
            image: "./assets/tshirt6.jpg"
        },
        {
            id: 4,
            name: "Tshirts",
            price: 12.99,
            image: "./assets/tshirt7.jpg"
        }
    ];

    const products1 = [
        {
            id: 5,
            name: "Tshirts",
            price: 19.99,
            image: "./assets/tshirt8.jpg"
        },
        {
            id: 6,
            name: "Tshirts",
            price: 12.99,
            image: "./assets/tshirt12.avif"
        },
        {
            id: 7,
            name: "TShirts",
            price: 19.99,
            image: "./assets/tshirt10.jpg"
        },
        {
            id: 8,
            name: "Tshirts",
            price: 12.99,
            image: "./assets/tshirt11.jpg"
        }
    ]


=======
import imageData from '../jsonfiles/homedesktop.json';

function Home() {

    const [carouselImages, setCarouselImages] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [topSellings, setTopSellings] = useState([]);
    const [kids, setKids] = useState([]);

    useEffect(() => {
        setCarouselImages(imageData.carouselImages);
        setNewArrivals(imageData.newArrivals);
        setTopSellings(imageData.topSellings);
        setKids(imageData.kids);
    }, []);
        
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
    return (
        <div className='container'>
            <div className='row'>
                <div className="App">
                    {/* Carousel Component */}
                    <div className='carouseldiv'>
<<<<<<< HEAD
                        <Carousel className='round'>
                            <Carousel.Item>
                                <img
                                    className="carousel "
                                    src="./assets/car1.jpg"
                                    alt="First slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel "
                                    src="./assets/car2.jpeg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./assets/car3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Carousel className='round'>
                            <Carousel.Item>
                                <img
                                    className="carousel1 "
                                    src="./assets/car1.jpg"
                                    alt="First slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel1 "
                                    src="./assets/car2.jpeg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel1"
                                    src="./assets/car3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="container">
                        <h1 className='catagories-header'>Categories</h1>
                        <div className="circle-container card-container d-flex flex-row">
                            <div className="circle">
                                <img src="./assets/tshirt1.avif" alt="Category 1" />
                                <p>T-shirts</p>
                            </div>
                            <div className="circle">
                                <img src="./assets/tshiet2.avif" alt="Category 2" />
                                <p>T-shirts</p>
                            </div>
                            <div className="circle">
                                <img src="./assets/tshirt3.avif" alt="Category 3" />
                                <p>T-shirts</p>
                            </div>
                            <div className="circle">
                                <img src="./assets/tshirt4.avif" alt="Category 4" />
                                <p>T-shirts</p>
                            </div>
                        </div>
                    </div>
=======
                        <Carousel>
                            {carouselImages.map(image => (
                                <Carousel.Item key={image.id}>
                                    <img
                                        className="carousel"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8

                    {/* New Arrivals Section */}
                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>New Arrivals</h1><br />
                        <div className="container container-row">
                            {newArrivals.map(product => (
                                <div className="product" key={product.id}>

                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>${product.price.toFixed(2)}</p>
<<<<<<< HEAD
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#d9d9d9' }}>Add to Cart</button>
                                    <FaHeart className="heart-icon" />
=======
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#102C57' }}>Add to Cart</button>
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
                                </div>
                            ))}
                        </div>
                    </div>
<<<<<<< HEAD

=======
                    <div className='hypercode'><hr /></div><br />

                    {/* Top Sellings Section */}
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>Top Sellings</h1><br />
                        <div className="container container-row">
                            {topSellings.map(product => (
                                <div className="product" key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
<<<<<<< HEAD
                                    <p>${product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#d9d9d9' }}>Add to Cart</button>
                                    <FaHeart className="heart-icon" />
=======
                                    <p>₹{product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#102C57' }}>Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='hypercode'><hr /></div><br />

                    {/* Kids Section */}
                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>Kids</h1><br />
                        <div className="container container-row">
                            {kids.map(product => (
                                <div className="product" key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>₹{product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#102C57' }}>Add to Cart</button>
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> f77c981a42c1912c6239d31a1d4e6efbd7284bf8
