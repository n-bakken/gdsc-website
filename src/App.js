import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/pages/About';
import GPoints from './components/pages/GPoints';
import ContactUs from './components/pages/ContactUs';
import Homepage from './components/pages/Homepage';
import { Login } from './components/pages/auth/Login';
import { Register } from './components/pages/auth/Register';
import AdminPage from './components/pages/BackendPage/AdminPage';
import "./App.css";
import 'boxicons/css/boxicons.min.css';
import Event from './components/pages/EventPage';
import Resources from './components/pages/Resources';
import DarkModeHome from './components/pages/DarkMode/DarkModeHome';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/GPoints" element={<GPoints />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/DarkModeHome" element={<DarkModeHome />} />
          {/* Add a wildcard route to catch any unmatched paths and render Homepage */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
