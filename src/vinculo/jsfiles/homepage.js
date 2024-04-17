// App.js
import React from 'react';
import '../cssfiles/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap

function Home() {

    const products = [
        {
            id: 1,
            name: "Tshirt",
            price: 19.99,
            image: "tshirt4.avif"
        },
        {
            id: 2,
            name: "Tshirt",
            price: 12.99,
            image: "tshirt9.jpg"
        },
        {
            id: 3,
            name: "Tshirt",
            price: 19.99,
            image: "tshirt6.jpg"
        },
        {
            id: 4,
            name: "Tshirts",
            price: 12.99,
            image: "tshirt7.jpg"
        },
        {
            id: 5,
            name: "Tshirts",
            price: 19.99,
            image: "tshirt8.jpg"
        },
        {
            id: 6,
            name: "Tshirts",
            price: 12.99,
            image: "tshirt12.avif"
        },
        {
            id: 7,
            name: "TShirts",
            price: 19.99,
            image: "tshirt10.jpg"
        },
        {
            id: 8,
            name: "Tshirts",
            price: 12.99,
            image: "tshirt11.jpg"
        },

    ];
    return (
      <div className='container'>
       <div className='row'>
        <div className="App">
          <div className='carouseldiv'> 
            <Carousel className='round'>
                <Carousel.Item>
                    <img
                        className="carousel "
                        src="car1.jpg"
                        alt="First slide"
                    
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel "
                        src="car2.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src="car3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Carousel className='round'>
                <Carousel.Item>
                    <img
                        className="carousel1 "
                        src="car1.jpg"
                        alt="First slide"
                    
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel1 "
                        src="car2.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel1"
                        src="car3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
          </div>
            <div className="container">
                <h1 className='catagories-header'>Categories</h1>
                <div className="circle-container card-container d-flex flex-row">
                    <div className="circle">
                        <img src="tshirt1.avif" alt="Category 1" />
                        <p>T-shirts</p>
                    </div>
                    <div className="circle">
                        <img src="tshiet2.avif" alt="Category 2" />
                        <p>T-shirts</p>
                    </div>
                    <div className="circle">
                        <img src="tshirt3.avif" alt="Category 3" />
                        <p>T-shirts</p>
                    </div>
                    <div className="circle">
                        <img src="tshirt4.avif" alt="Category 4" />
                        <p>T-shirts</p>
                    </div>
                </div>
            </div>


            <div className="container">

                {products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button className="btn" style={{ backgroundColor: '#FBF8BE' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
       </div>
      </div>
    );


}

export default Home;