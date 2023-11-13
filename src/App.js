import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import GPoints from './components/pages/GPoints';
import ContactUs from './components/pages/ContactUs';
import Homepage from './components/pages/Homepage';
import {Login} from './components/pages/auth/Login';
import {Register} from './components/pages/auth/Register';
import "./App.css";
import 'boxicons/css/boxicons.min.css';
import Event from './components/pages/EventPage';
import { RealtimeData } from './components/pages/Backend/realtime';// for testing purposes
import  Reupload  from './components/pages/Backend/Reupload';// for testing purposes
import ImageText from './components/pages/Backend/ImageText';
import Admin from './components/pages/Admin';
import Resources from './components/pages/Resources';


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
        <Route path="/RealtimeData" element={<RealtimeData />} />
        <Route path="/ImageText" element={<ImageText />} />
        <Route path="/Reupload" element={<Reupload />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;