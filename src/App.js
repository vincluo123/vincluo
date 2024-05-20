import { useState } from 'react';
import './App.css';
// import Header from './vinculo/jsfiles/headerDesktop';
import CartPage from './vinculo/jsfiles/cart';
// import Footer from './vinculo/jsfiles/footerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
// import ProductDetails from './vinculo/jsfiles/productdetails';
import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Login from './Login';
// import Infantgirls from './vinculo/jsfiles/infantgirls';
import Wishlist from './vinculo/jsfiles/wishlist';
import Faq from './vinculo/jsfiles/faq';

//import Wishlist from './vinculo/jsfiles/wishlist';
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

function App() {
  const [showAccountPage, setShowAccountPage] = useState(true);

  const hideAccountPage = () => {
    setShowAccountPage(false);
  };

  return (

    //     <>
    //       {/* <BrowserRouter>
    // <Routes>
    // <Route path="" element={HeaderMobile}/>
    // <Route path="/cart" element={CartPage }/>



    // </Routes>

    // </BrowserRouter> */}

    //       {/*<Router>
    //       <Routes>
    //         <Route path="/" element={<AddressForm />} />
    //         <Route path="/new-address" element={<NewAddressForm />} />
    //       </Routes>
    //     </Router>*/}

    //       {/* <HeaderMobile/> */}



    //       {/* <Wishlist />  */}

    //       {/*<NewAddressForm/> */}
    //       {/*<AddressForm/> */}
    //       {/* <Footer/> */}

    //       {/*<CartPage/> */}

    //       {/*<Faq /> */}
    //       {/* <About/>*/}
    //       {/*<Wishlist /> */}

    //       {/* <AboutUs/> */}
    //       {/* <Wishlist />  */}
    //       {/*<Faq /> */}
    //       {/* <About/>*/}
    //       {/*<Footer/> */}
    //       {/* <ProductDetails/> */}
    //       {/* <Faq /> */}
    //       {/*<Offer/> */}

    //       {/*<Kids/>*/}





    //       {/* <Header/>*/}


    //       {/* <Footer/> */}
    //       {/* <ProductDetails/> */}

    //     </>

    <Router>
      <>
        <>
          {/* Render the AccountPage component if showAccountPage is true */}
          {showAccountPage && (
            <Routes>
              <Route path="/account" element={<Account />} />
            </Routes>
          )}

          {/* Define routes */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home hideAccountPage={hideAccountPage} />} />
            <Route path="/home" element={<Home hideAccountPage={hideAccountPage} />} />
            <Route path="/orders" element={<OrderConfirmation hideAccountPage={hideAccountPage} />} />
            <Route path="/wishlist" element={<Wishlist hideAccountPage={hideAccountPage} />} />
            <Route path="/cart" element={<CartPage hideAccountPage={hideAccountPage} />} />
            <Route path="/faq" element={<Faq hideAccountPage={hideAccountPage} />} />
          </Routes>
        </>
      </>
    </Router>

  );
}

export default App;
