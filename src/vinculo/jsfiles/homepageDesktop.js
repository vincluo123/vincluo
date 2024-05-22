import React, { useState, useEffect } from 'react';
import '../cssfiles/homepageDesktop.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import imageData from '../jsonfiles/homedesktop.json';
import { Link } from 'react-router-dom'

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

    return (
        <div className='container1'>

            <div className="App">
                {/* Carousel Component */}
                <div className='carouseldiv'>
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

                {/* New Arrivals Section */}
                <div className="new-arrival-container">
                    <h1 className='new-arrival'>New Arrivals</h1><br />
                    <div className="container container-row">
                        {newArrivals.map(product => (
                            <div className="product" key={product.id}>
                                
                                    <img src={product.image} alt={product.name} />
                                
                                <h3>{product.name}</h3>
                                <p>${product.price.toFixed(2)}</p>
                                <button className="btn" id='cart-btn' style={{ backgroundColor: '#102C57' }}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='hypercode'><hr /></div><br />

                {/* Top Sellings Section */}
                <div className="new-arrival-container">
                    <h1 className='new-arrival'>Top Sellings</h1><br />
                    <div className="container container-row">
                        {topSellings.map(product => (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
