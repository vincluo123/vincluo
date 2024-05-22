<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import Header from './vinculo/jsfiles/headerDesktop';
import CartPage from './vinculo/jsfiles/cart';
import Footer from './vinculo/jsfiles/footerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Login from './Login';
// import Infantgirls from './vinculo/jsfiles/infantgirls';

import Faq from './vinculo/jsfiles/faq';
import WishlistPage from './vinculo/jsfiles/wishlist';

//import Faq from './vinculo/jsfiles/faq';
//import AboutUs from "./vinculo/jsfiles/about";
//import Header from "./vinculo/mobilehome/headerMobile";
// import HeaderMobile from "./vinculo/mobilehome/headerMobile";
//import Footer from './vinculo/jsfiles/footerDesktop';
//import AddressForm from './vinculo/jsfiles/AddressForm';
//import {  Route, Routes , Router } from 'react-router-dom';
//import AddressForm from './vinculo/jsfiles/AddressForm';
//import NewAddressForm from './vinculo/jsfiles/NewAddressForm';
//import Brandnameheader from './vinculo/jsfiles/brandnameheader';
//import AddressForm from './vinculo/jsfiles/AddressForm';]

import Account from './vinculo/Authentication/AccountPage';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductDetails from './vinculo/jsfiles/productdetails';
import Offer from './vinculo/jsfiles/offer';
=======
//import NotificationPage from "./vinculo/jsfiles/Notification";
//import Faq from "./vinculo/jsfiles/faq";
// import Header from './vinculo/mobilehome/headerMobile';
>>>>>>> 4a4e526a6e1397da44dd70fd822a878b131b103d

import AboutUs from "./vinculo/jsfiles/about";

// import HeaderDesktop from "./vinculo/jsfiles/headerDesktop";
function App() {
  const [showAccountPage, setShowAccountPage] = useState(true);

  const hideAccountPage = () => {
    setShowAccountPage(false);
  };

  return (
<<<<<<< HEAD
<>
{/* <ProductDetails/> */}
{/* <Offer/> */}
<WishlistPage/>
</>

=======
    <>
      <AboutUs/>
    
    </>
>>>>>>> 4a4e526a6e1397da44dd70fd822a878b131b103d
  );
}

export default App;
