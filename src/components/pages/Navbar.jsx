import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
          <a href="/Event">Events</a>
          <a href="/#">GBoard</a>
          <a href="/#">Meeting</a>
          <a href="/ContactUs">Contact</a>
          <a href="/Login">Login</a>
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

  export default Navbar;