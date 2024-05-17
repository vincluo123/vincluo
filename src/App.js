import Header from './vinculo/jsfiles/headerDesktop';
import Boys from './vinculo/jsfiles/boys';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/boys" element={<Boys />} />
      </Routes>
    </Router>
  );
}

export default App;
