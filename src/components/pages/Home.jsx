import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Home.css";
import "./Footer.jsx"; 
import Navbar from './Navbar';
import Model from './Laptop_model.jsx'; 

/*
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <><header>
      <h1>Google Developer Club</h1>
      <img className="uoplogo" src={"images/uop.png"} width="5%" alt="gotigers" />
      <nav ref={navRef}>
        <div><a href="/about">About</a></div>
        <div><a href="/#">G Points Board</a></div>
        <div><a href="/#">Events</a></div>
        <div><a href="/ContactUs">Contact Us</a></div>
        <div><a href="/Login">Login</a></div>
        <div><a href="https://discord.gg/xrRTJsBukF" target="_blank" rel="noopener noreferrer" className="discord-button">Discord</a></div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    </>
  );
}
*/


function Home() {
  const state = {
    title: "Hi,",
    titleTwo: "Google Developer",
    titleThree: "Welcome to our Club",
    Image: "images/Logo.png",
  };

  return (
    <><div className="home">
      <div className="home-intro">
        <h2>
          <div className="title">{state.title}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
        </h2>

        <div className="text">
          {/* Add your text content here */}
        </div>

        <div className="contact-me">
          <button className="button">Sign up!</button>
        </div>
      </div>
      <div className="three-container">
        <Model />
      </div>
    </div><br></br><div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=America%2/Los_Angeles&showPrint=0&showTz=1&showTabs=1&showDate=1&src=Z2RzYy51b3BAZ21haWwuY29t&color=%230B8043"
          style={{ borderWidth: 0, width: "800px", height: "600px", margin: 0, padding: 0 }}
          frameBorder={0}
          scrolling="no"
        ></iframe>

      </div></>
  );
}



function HomePage() {
  return (
    <div>
      <Navbar /> 
      <Home />
    </div>
  );
}

export default HomePage;