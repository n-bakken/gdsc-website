import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Home.css";

function Navbar() {
    const navRef = useRef();
  
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
  
    return (
      <><header>
        <h1>Google Developer Student Club</h1>
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

  export default Navbar;