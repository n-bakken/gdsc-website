import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Home.css";
import "./Footer.jsx"; 
import Model from './Laptop_model.jsx'; 

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>Google Developer Club</h1>
      <img className="uoplogo" src={"images/uop.png"} width="5%" alt="gotigers" />
      <nav ref={navRef}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/#">GBoard</a>
        <a href="/#">Meeting</a>
        <a href="/ContactUs">Contact</a>
        <a href="/Login">Login</a>
        <a href="https://discord.gg/xrRTJsBukF" target="_blank" rel="noopener noreferrer" className="discord-button">Discord</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}



function Home() {
  const state = {
    title: "Hi,",
    titleTwo: "Google Developer",
    titleThree: "Welcome to our Club",
    Image: "images/Logo.png",
  };

  return (
    <div className="home">
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
    
      
    </div>
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