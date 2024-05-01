
import './App.css';
import Header from './vinculo/jsfiles/headerDesktop';
import CartPage from './vinculo/jsfiles/cart';
import Footer from './vinculo/jsfiles/footerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
import Girls from './vinculo/jsfiles/8-16girls';
//import ProductDetails from './vinculo/jsfiles/productdetails';
//import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Login from './Login';
//import Wishlist from './vinculo/jsfiles/wishlist';
//import Infantboys from './vinculo/jsfiles/Infantboys';


function App() {
  return (
    <>

   
   {/* <Whilelist/> */}
      <Header/>
      <Home/>
      {/* <CartPage/> */}
     {/*<Wishlist /> */}
     <Girls />
      <Footer/>
      {/* <ProductDetails/> */}

   
      {/* <Header/>
      <Home/>
      <CartPage/> */}
     {/* <OrderConfirmation/> */}
      {/* <Footer/> */}
      {/* <ProductDetails/> */}

    </>
  );
}

export default App;
