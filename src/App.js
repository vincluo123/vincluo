
import './App.css';
import Header from './vinculo/jsfiles/headerDesktop';
import CartPage from './vinculo/jsfiles/cart';
import Footer from './vinculo/jsfiles/footerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
import ProductDetails from './vinculo/jsfiles/productdetails';
import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
// import ProductDetails from './vinculo/jsfiles/productdetails';
// import Login from './Login';
import AccountPage from './vinculo/jsfiles/AccountPage';
import Kids from './vinculo/jsfiles/kids';
import Boys from './vinculo/jsfiles/boys';
import Faq from './vinculo/jsfiles/faq';
import SignupPage from './vinculo/jsfiles/Loginpage';
function App() {
  return (
    <>

      <Header />
      <Home />
      <CartPage />
      <OrderConfirmation />
      <ProductDetails />
      <Kids />
      <AccountPage />
      <Boys />
      <Home />
      <Footer />
      <Faq />
      <SignupPage />
    </>
  );
}

export default App;
