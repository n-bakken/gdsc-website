import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Homepage from './components/pages/Homepage';
import "./App.css";

const App = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;