//import './App.css';
// import Header from './vinculo/jsfiles/headerDesktop';

// import CartPage from './vinculo/jsfiles/cart';

// import Home from './vinculo/jsfiles/homepageDesktop';
import ProductDetails from './vinculo/jsfiles/productdetails';



import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';

import OrderConfirmationPopup from './vinculo/jsfiles/OrderConfirmPopup';

import CartPage from './vinculo/jsfiles/cart';

import HeaderMobile from "./vinculo/mobilehome/headerMobile";


import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import WishlistPage from './vinculo/jsfiles/wishlist';


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
 {/* <HeaderMobile/> */}

    
    
    
     
      <CartPage/>      
      <OrderConfirmation/>  
      {/*<ProductDetails/> */}
      {/* <OrderConfirmationPopup/> */}
      {/* <Footer/> */}
      <WishlistPage/>
    </>
  );
}

export default App;
