// App.js
import React from 'react';
import '../cssfiles/kids.css';

function Kids() {
  // Define product data
  const products = [
    {
      id: 1,
      name: "Superhero Action Figure",
      price: 19.99,
      image: "kids_product1.jpg"
    },
    {
      id: 2,
      name: "Cute Plush Toy",
      price: 12.99,
      image: "kids_product2.jpg"
    }
    // Add more products as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kids Section</h1>
      </header>
      <div className="container">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
