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
import Wishlist from './vinculo/jsfiles/wishlist';
import Faq from './vinculo/jsfiles/faq';
=======
//import './App.css';
import Header from './vinculo/jsfiles/headerDesktop';

// import CartPage from './vinculo/jsfiles/cart';

// import Home from './vinculo/jsfiles/homepageDesktop';
// import ProductDetails from './vinculo/jsfiles/productdetails';


//import CartPage from './vinculo/jsfiles/cart';
// import Footer from './vinculo/jsfiles/footerDesktop';
// import CartPage from './vinculo/jsfiles/cart';
//  import Footer from './vinculo/jsfiles/footerDesktop';
// import Home from './vinculo/jsfiles/homepageDesktop';
// import ProductDetails from './vinculo/jsfiles/productdetails';
import Kids from './vinculo/jsfiles/kids';
import Offer from './vinculo/jsfiles/offer';

//import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Login from './Login';

// import Wishlist from './vinculo/jsfiles/wishlist';
// import Faq from './vinculo/jsfiles/faq';
>>>>>>> 0e7323b916136e488f824cc7638ad7db36ef28c2

import WishlistPage from './vinculo/jsfiles/wishlist';
//import Faq from './vinculo/jsfiles/faq';
//import AboutUs from "./vinculo/jsfiles/about";
<<<<<<< HEAD
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

//import HeaderMobile from "./vinculo/jsfiles/headerMobile";
import Footer from './vinculo/jsfiles/footerDesktop';
import Boys from './vinculo/jsfiles/boys';
//import Brandnameheader from './vinculo/jsfiles/brandnameheader';




>>>>>>> 0e7323b916136e488f824cc7638ad7db36ef28c2

function App() {
  const [showAccountPage, setShowAccountPage] = useState(true);

  const hideAccountPage = () => {
    setShowAccountPage(false);
  };

  return (
<<<<<<< HEAD
<>
<ProductDetails/>
{/* <Offer/> */}
</>

=======
    <>
      <Header />


      {/* <Wishlist />  */}

      {/* <Footer/> */}

      {/*<CartPage/> */}

      {/*<Faq /> */}
      {/* <About/>*/}
      {/*<Wishlist /> */}

      {/* <AboutUs/> */}
      {/* <Wishlist />  */}
      {/*<Faq /> */}
      {/* <About/>*/}
      {/* <Footer/> */}
      {/* <ProductDetails/> */}
      {/* <Faq /> */}
      {/* <Offer />
      <Kids /> */}

      {/* <Header/>*/}


      {/* <Footer/> */}
      {/* <Header/>
      <CartPage/> */}
      {/* <OrderConfirmation/>  */}

      {/* <ProductDetails/> */}

      {/* <AccountPage/> */}
      {/* <HeaderMobile /> */}


      <Boys />
      {/* <AccountPage/> */}
      {/*<HeaderMobile /> */}
      {/*<OrderConfirmation /> */}
      <Footer />

    </>
>>>>>>> 0e7323b916136e488f824cc7638ad7db36ef28c2
  );
}

export default App;
