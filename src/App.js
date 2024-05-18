import Header from './vinculo/jsfiles/headerDesktop';
import Boys from './vinculo/jsfiles/boys';
import Footer from './vinculo/jsfiles/footerDesktop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/boys" element={<Boys />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
