import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderMobile from './vinculo/mobilehome/headerMobile';
import ProductDetails from './vinculo/mobilehome/productDetails';

function App() {
    return (
      <Router>
      <Routes>
          <Route path="/" element={<HeaderMobile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
  </Router>
    );
}

export default App;
