import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';
import ContactUs from './components/ContactUs';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Homepage1 from './components/Homepage_good';
import "./App.css";

const App = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Homepage1 />} />
        <Route path="/Home" element={<Homepage1 />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;