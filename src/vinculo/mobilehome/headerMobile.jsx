// App.js
import React from 'react';
import '../cssfiles/headermobile.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import productsData from '../jsonfiles/products.json';
import carouselImages from "../jsonfiles/carousel.json"
import categoryImages from "../jsonfiles/categoryimg.json"
import Header from './brandnameheader';
import '../cssfiles/header.css';
import '../cssfiles/navheader.css';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>



function HeaderMobile() {
    
    
    return (
        <>
      
      
        <div className="App">
            <Header/>
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

            <h1 className='catagories-header'>Categories</h1>
                <div className="categories-div">
                    <div className='categories-element'>
                        {/* Render boys category image */}
                        <img src={categoryImages.boys.src} className='categories-img' alt={categoryImages.boys.alt} />
                        <h3 className="txt">Boys</h3>
                    </div>
                    <div className='categories-element'>
                        {/* Render girls category image */}
                        <img src={categoryImages.girls.src} className='categories-img' alt={categoryImages.girls.alt} />
                        <h3 className="txt">Girls</h3>
                    </div>
                    <div className='categories-element'>
                        {/* Render infants category image */}
                        <img src={categoryImages.infants.src} className='categories-img' alt={categoryImages.infants.alt} />
                        <h3 className="txt">Infants</h3>
                    </div>
                </div>
            <h1 className='catagories-header'>KIDS</h1>

            <div className="container">

                {productsData.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        {/* <h6>{product.cname}</h6> */}
                        <p>${product.price.toFixed(2)}</p>
                       
                    </div>
                    
                ))}
            </div>
            <h1 className='catagories-header'>New Arrivals</h1>
            <div className="container">

                       {productsData.map(product => (
                         <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            {/* <h6>{product.cname}</h6> */}
                            <p>${product.price.toFixed(2)}</p>
       
                  </div>
            ))}
            </div>
            <h1 className='catagories-header'>Top Sales</h1>
            <div className="container">

                       {productsData.map(product => (
                         <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            {/* <h6>{product.cname}</h6> */}
                            <p>${product.price.toFixed(2)}</p>
       
                  </div>
            ))}
            </div>
            
        </div>
      

        </>
       
    );
   

}

export default HeaderMobile;