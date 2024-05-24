



 import CartPage from './vinculo/jsfiles/cart';


import Infantgirls from './vinculo/jsfiles/infantgirls';

import HeaderMobile from "./vinculo/mobilehome/headerMobile";

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

export default App;
