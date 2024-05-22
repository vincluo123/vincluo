import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/headermobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import productsData from '../jsonfiles/products.json';
import carouselImages from "../jsonfiles/carousel.json";
import categoryImages from "../jsonfiles/categoryimg.json";
import Header from './brandnameheader';
import '../cssfiles/header.css';
import '../cssfiles/navheader.css';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function HeaderMobile() {
    return (
        <div className="App">
            <Header />
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

            <h1 className='categories-header'>Categories</h1>
            <div className="categories-div">
                <div className='categories-element'>
                    <img src={categoryImages.boys.src} className='categories-img' alt={categoryImages.boys.alt} />
                    <h3 className="txt">Boys</h3>
                </div>
                <div className='categories-element'>
                    <img src={categoryImages.girls.src} className='categories-img' alt={categoryImages.girls.alt} />
                    <h3 className="txt">Girls</h3>
                </div>
                <div className='categories-element'>
                    <img src={categoryImages.infants.src} className='categories-img' alt={categoryImages.infants.alt} />
                    <h3 className="txt">Infants</h3>
                </div>
            </div>
            <h1 className='categories-header'>KIDS</h1>

            <div className="container">
                {productsData.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HeaderMobile;
