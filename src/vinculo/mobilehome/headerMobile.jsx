import React from 'react';
import '../cssfiles/headermobile.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap

import Header from './brandnameheader';
import '../cssfiles/header.css';
import '../cssfiles/navheader.css';
import Footermobile from '../jsfiles/footerMobile';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function HeaderMobile() {
    
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
            id: 8,
            name: "T-shirt",
            cname: "vinculo",
            price: 12.99,
            image: "BOYS-12_page-0001.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-9_page-0001.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-10_page-0001.jpg"
        },
        {
            id: 8,
            name: "T-shirt",
            cname: "vinculo",
            price: 300,
            image: "BOYS-11_page-0001.jpg"
        },

    ];
    return (
        <>
        <div className="App">
            <Header/>
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
            <div class="categories-div">
                <div class='categories-element'>
                    <img src="" class='categories-img' alt="omg"></img>
                    <h3 class="txt">Boys</h3>
                </div>
                <div class='categories-element'>
                    <img src="" class='categories-img' alt="omg"></img>
                    <h3 class="txt">Girls</h3>
                </div>
                <div class='categories-element'>
                    <img src="" class='categories-img' alt="omg"></img>
                    <h3 class="txt">Infants</h3>
                </div>
            </div>
            <h1 className='catagories-header'>KIDS</h1>

            <div className="container desktop-hidden">

                {products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        {/* <h6>{product.cname}</h6> */}
                        <p>${product.price.toFixed(2)}</p>
                       
                    </div>
                    
                    
                ))}
            </div>
            <h1 className='catagories-header'>New Arrivals</h1>
            <div className="container desktop-hidden">

                       {products.map(product => (
                         <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            {/* <h6>{product.cname}</h6> */}
                            <p>${product.price.toFixed(2)}</p>
       
                  </div>

            ))}
            </div>
            <h1 className='catagories-header'>Top Sales</h1>
            <div className="container desktop-hidden">

                       {products.map(product => (
                         <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            {/* <h6>{product.cname}</h6> */}
                            <p>${product.price.toFixed(2)}</p>
       
                  </div>
                  
            ))}
            
            </div>
           
            
        </div>
        <Footermobile/>
       
        </>
       
    );
   

}

export default HeaderMobile;  
