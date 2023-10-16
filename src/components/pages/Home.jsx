import React, {useEffect, useState } from "react";
import "./css/Home.css";
import "./Footer.jsx"; 
import Navbar from './Navbar';
import Model from './Laptop_model.jsx'; 
import { ref, get } from "firebase/database";
import { auth, database } from "../../firebase";

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
    <div className="home">
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