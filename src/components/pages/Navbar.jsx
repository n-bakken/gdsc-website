import React, { useRef, useEffect, useState} from "react";
import { FaBars, FaTimes, FaCaretDown} from "react-icons/fa";
import "./css/Home.css";
import { auth } from "../../firebase";
import  Dropdown from "./Dropdown"; 


function Navbar() {
    const navRef = useRef();
    const [loginStatus, setLoginStatus] = useState(null);
   
    const [dropdown, setDropdown] = useState(false); 
    const [click, setClick] = useState(false);
   // const handleClick = () => setClick(!click);
    
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
  
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

    useEffect(() => {
      if (auth.currentUser) {
        setLoginStatus(1)
      }
    }, []);
  
    return (
      <><header>
        <h1><a href="/Home">Google Developer Student Club</a></h1>
        <img className="uoplogo" src={"images/uop.png"} width="5%" alt="gotigers" />
        <nav ref={navRef}>
          <div><a href="/about">About</a></div>
          <div><a href="/#">G Points Board</a></div>
          <div><a href="/Event">Events</a></div>
          <div><a href="/ContactUs">Contact Us</a></div>
          {loginStatus ? <div><a href="/Login">Logout</a></div> : <div><a href="/Login">Login</a></div>}
          
            <ul className= {click ? "nav-menu active" : "nav-menu"}> 
                <li className="nav-item"
                 onMouseEnter = { onMouseEnter}
                 onMouseLeave = { onMouseLeave}
                >
                    <a href="/Resources" className="nav-links" > More <FaCaretDown /> </a>
                    {dropdown && <Dropdown />}
                </li>
            </ul>
          
         
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



  const navBar = () => {
    return (
      <div>
         <Navbar />
       
      </div>
    )
  }

  export default navBar; 
  //export default Navbar;