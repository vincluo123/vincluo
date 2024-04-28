
import './App.css';
import Header from './vinculo/jsfiles/headerDesktop';
import CartPage from './vinculo/jsfiles/cart';
import Footer from './vinculo/jsfiles/footerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
//import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
//import Login from './Login';



function App() {
  return (
    <>
   
      <Header/>
      <Home/>
      <CartPage/>
     {/*<OrderConfirmation/> */}
      <Footer/>
      {/* <ProductDetails/> */}
    </>
  );
}

export default App;
