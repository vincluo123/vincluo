//import './App.css';
// import Header from './vinculo/jsfiles/headerDesktop';

<<<<<<< HEAD
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Smallboys from './vinculo/jsfiles/Smallboys';
// import Smallgirls from './vinculo/jsfiles/Smallgirls';
import { WishlistProvider } from './vinculo/jsfiles/wishcontext';

const App = () => {
    return (
        <Router>
            <WishlistProvider>
                <Routes>
                    <Route path="/*" element={<Smallboys />} />
                    {/* <Route path="/*" element={<Smallgirls />} /> */}
                </Routes>
            </WishlistProvider>
        </Router>
    );
};
=======
// import CartPage from './vinculo/jsfiles/cart';

// import Home from './vinculo/jsfiles/homepageDesktop';
// import ProductDetails from './vinculo/jsfiles/productdetails';


//import CartPage from './vinculo/jsfiles/cart';
// import Footer from './vinculo/jsfiles/footerDesktop';
 import CartPage from './vinculo/jsfiles/cart';
//  import Footer from './vinculo/jsfiles/footerDesktop';
// import Home from './vinculo/jsfiles/homepageDesktop';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Kids from './vinculo/jsfiles/kids';
//import Offer from './vinculo/jsfiles/offer';

//import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Login from './Login';
import Infantgirls from './vinculo/jsfiles/infantgirls';
// import Wishlist from './vinculo/jsfiles/wishlist';
// import Faq from './vinculo/jsfiles/faq';

//import Wishlist from './vinculo/jsfiles/wishlist';
//import Faq from './vinculo/jsfiles/faq';
//import AboutUs from "./vinculo/jsfiles/about";
//import Header from "./vinculo/mobilehome/headerMobile";
import HeaderMobile from "./vinculo/mobilehome/headerMobile";
//import Footer from './vinculo/jsfiles/footerDesktop';
//import AddressForm from './vinculo/jsfiles/AddressForm';
//import {  Route, Routes , Router } from 'react-router-dom';
//import AddressForm from './vinculo/jsfiles/AddressForm';
//import NewAddressForm from './vinculo/jsfiles/NewAddressForm';
//import Brandnameheader from './vinculo/jsfiles/brandnameheader';
//import AddressForm from './vinculo/jsfiles/AddressForm';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path="" element={HeaderMobile}/>
<Route path="/cart" element={CartPage }/>



</Routes>

</BrowserRouter>

{/*<Router>
      <Routes>
        <Route path="/" element={<AddressForm />} />
        <Route path="/new-address" element={<NewAddressForm />} />
      </Routes>
    </Router>*/}
 <HeaderMobile/>


    
     {/* <Wishlist />  */}
  
 {/*<NewAddressForm/> */}
 {/*<AddressForm/> */}
      {/* <Footer/> */}
      
     {/*<CartPage/> */}

      {/*<Faq /> */}
     {/* <About/>*/}
    {/*<Wishlist /> */}
    
     {/* <AboutUs/> */} 
      {/* <Wishlist />  */}
       {/*<Faq /> */}
      {/* <About/>*/}
       {/*<Footer/> */}
      {/* <ProductDetails/> */}
    {/* <Faq /> */}
     {/*<Offer/> */}

{/*<Kids/>*/}





      {/* <Header/>*/ }
      
      
      {/* <Footer/> */}
      {/* <Header/>*/}
      {/*<CartPage/> */}
      {/* <OrderConfirmation/>  */}
       
      {/* <ProductDetails/> */}



      

      {/* <AccountPage/> */}
      {/*<HeaderMobile /> */}
      {/*<OrderConfirmation /> */}
     {/* <Footer/> */}
    </>
  );
}
>>>>>>> main

export default App;
