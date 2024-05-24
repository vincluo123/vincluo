// Home.js
import React, { useState, useEffect } from 'react';
import '../cssfiles/homepageDesktop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import imageData from '../jsonfiles/homedesktop.json';
import ProductDetail from '../jsfiles/homeproduct';

function Home() {
    const [carouselImages, setCarouselImages] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [topSellings, setTopSellings] = useState([]);
    const [kids, setKids] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setCarouselImages(imageData.carouselImages);
        setNewArrivals(imageData.newArrivals);
        setTopSellings(imageData.topSellings);
        setKids(imageData.kids);
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleBackClick = () => {
        setSelectedProduct(null);
    };

    if (selectedProduct) {
        return <ProductDetail product={selectedProduct} onBack={handleBackClick} />;
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="App">
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

                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>New Arrivals</h1><br />
                        <div className="container container-row">
                            {newArrivals.map(product => (
                                <div className="product" key={product.id} onClick={() => handleProductClick(product)}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>${product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#102C57' }}>Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='hypercode'><hr /></div><br />

                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>Top Sellings</h1><br />
                        <div className="container container-row">
                            {topSellings.map(product => (
                                <div className="product" key={product.id} onClick={() => handleProductClick(product)}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>₹{product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#102C57' }}>Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='hypercode'><hr /></div><br />

                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>Kids</h1><br />
                        <div className="container container-row">
                            {kids.map(product => (
                                <div className="product" key={product.id} onClick={() => handleProductClick(product)}>
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
        </div>
    );
}

export default Home;
