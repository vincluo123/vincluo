import { useState } from 'react';
import './App.css';
import Header from './vinculo/jsfiles/headerDesktop';
import CartPage from './vinculo/jsfiles/cart';
import Footer from './vinculo/jsfiles/footerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
import OrderConfirmation from './vinculo/jsfiles/orderConfirmationPage';
import Faq from './vinculo/jsfiles/faq';
import WishlistPage from './vinculo/jsfiles/wishlist';
import Account from './vinculo/Authentication/AccountPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [showAccountPage, setShowAccountPage] = useState(true);

  const hideAccountPage = () => {
    setShowAccountPage(false);
  };
return (
<Router>
      <Header />
      <>
        <>
        
        {showAccountPage && (
            <Routes>
              <Route path="/account" element={<Account />} />
            </Routes>
          )}

          
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home hideAccountPage={hideAccountPage} />} />
            <Route path="/home" element={<Home hideAccountPage={hideAccountPage} />} />
            <Route path="/orders" element={<OrderConfirmation hideAccountPage={hideAccountPage} />} />
            <Route path="/cart" element={<CartPage hideAccountPage={hideAccountPage} />} />
            <Route path="/faq" element={<Faq hideAccountPage={hideAccountPage} />} />
            <Route path="/Accountpage" element={<Account hideAccountPage={hideAccountPage} />} />
            <Route path="/Wishlist" element={<WishlistPage hideAccountPage={hideAccountPage} />} />


          </Routes>
        </>
      </>
      <Footer />
    </Router>

  );
}

export default App;
