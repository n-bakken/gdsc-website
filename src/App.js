import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';
import ContactUs from './components/ContactUs';
import HomePage from './components/Homepage';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;