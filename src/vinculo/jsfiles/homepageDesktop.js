// App.js
import React from 'react';
import '../cssfiles/homepageDesktop.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
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


    return (
        <div className='container'>
            <div className='row'>
                <div className="App">
                    <div className='carouseldiv'>
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
<<<<<<< HEAD

=======
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
>>>>>>> c1cdc2e4365a1e81aca37fd2b1c73748d8c00c73
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
<<<<<<< HEAD

=======
                            <div className="circle">
                                <img src="./assets/tshirt4.avif" alt="Category 4" />
                                <p>T-shirts</p>
                            </div>
>>>>>>> c1cdc2e4365a1e81aca37fd2b1c73748d8c00c73
                        </div>
                    </div>

                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>New Arrivals</h1>
                        <div className="container container-row">
                            {products.map(product => (
                                <div className="product" key={product.id}>

                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>${product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#d9d9d9' }}>Add to Cart</button>
                                    <FaHeart className="heart-icon" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="new-arrival-container">
                        <h1 className='new-arrival'>Top Sellings</h1>
                        <div className="container container-row">
                            {products1.map(product => (
                                <div className="product" key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>${product.price.toFixed(2)}</p>
                                    <button className="btn" id='cart-btn' style={{ backgroundColor: '#d9d9d9' }}>Add to Cart</button>
                                    <FaHeart className="heart-icon" />
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