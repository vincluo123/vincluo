import React from 'react';
import { useState } from 'react'; // Import useState hook
import '../cssfiles/headermobile.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import Navbar from './brandnameheader';
import Footermobile from '../jsfiles/footerMobile';

// Assuming productsData and products are imported from somewhere
const productsData = []; // Define or import productsData
const products = []; // Define or import products

function HeaderMobile() {
    // State variable to store the details of the clicked product
    const [clickedProduct, setClickedProduct] = useState(null);

    // Function to handle click on a product container
    const handleClick = (product) => {
        setClickedProduct(product);
    };

    return (
        <>
            <Navbar/>
            <div className="App">
                {/* <Header/> <!-- Include Header component if defined --> */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carousel"
                            src="/assets/carousel1.webp"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel "
                            src="/assets/carousel2.webp"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel"
                            src="/assets/carousel3.webp"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <h1 className='catagories-header'>Categories</h1>
                {/* Categories content */}
                <h1 className='catagories-header'>KIDS</h1>
                {/* Render product containers */}
                <div className="container">
                    {/* Iterate over productsData array */}
                    {productsData.map(product => (
                        <div className="product" key={product.id} onClick={() => handleClick(product)}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <h1 className='catagories-header'>Top Sales</h1>
                <div className="container">
                    {/* Iterate over products array */}
                    {products.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footermobile />
        </>
    );
}

export default HeaderMobile;
