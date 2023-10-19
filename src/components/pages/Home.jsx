import React, {useEffect, useState } from "react";
import "./css/Home.css";
import "./Footer.jsx"; 
import Navbar from './Navbar';
import Model from './Laptop_model.jsx'; 
import { ref, get } from "firebase/database";
import { auth, database } from "../../firebase";

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
function Home() {
  const [userFirstName, setUserFirstName] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      getUserFirstName(userId)
        .then((firstName) => {
          if (firstName) {
            setUserFirstName(firstName);
          }
        })
        .catch((error) => {
          console.error("Error fetching first name:", error);
        });
    }
  }, []);

  const getUserFirstName = async (userId) => {
    const dbRef = ref(database, `/users/${userId}/firstname`); // Adjust the database path
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  };

  const state = {
    title: "Hi,",
    titleTwo: "UOP Tiger",
    titleThree: "Welcome to our Club",
    Image: "images/Logo.png",
  };

  return (
    <><div className="home">
      <div className="home-intro">
        <h2>
          <div className="title">{state.title}</div>
          {userFirstName ? userFirstName : state.titleTwo}
          <div className="titleThree">{state.titleThree}</div>
        </h2>

        <div className="text">
          {/* Add your text content here */}
        </div>
        <div className="contact-me">
          <button className="button"><a href="/Register">Sign up!</a></button>
        </div>

      </div>
      <div className="three-container">
        <Model />
      </div>
    </div><br></br><div>
        <iframe title="calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=America%2/Los_Angeles&showPrint=0&showTz=1&showTabs=1&showDate=1&src=Z2RzYy51b3BAZ21haWwuY29t&color=%230B8043"
          style={{ borderWidth: 0, width: "800px", height: "600px", margin: 0, padding: 0 }}
          frameBorder={0}
          scrolling="no"
        ></iframe>

      </div></>
  );
}

export default Home;

function HomePage() {
  return (
    <div>
      <Navbar /> 
      <Home />
    </div>
  );
}

