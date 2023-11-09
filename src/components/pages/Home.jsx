import React, {useEffect, useState } from "react";
import "./css/Home.css";
import "./Footer.jsx"; 
import Model from './Laptop_model.jsx'; 
import { ref, get } from "firebase/database";
import { auth, database } from "../../firebase";

function Home() {
  const [userFirstName, setUserFirstName] = useState(null);
  const [isCoreMember, setIsCoreMember] = useState(null);

  const handleRedirect = () => {
    const userChoice = window.confirm("Hi core member! Do you want to be redirected to the AdminPage?");
    if (userChoice) {
      window.location.href = '/AdminPage';
    }
  };

  useEffect(() => {
    console.log("auth.currentUser:", auth.currentUser);
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      getUserFirstName(userId)
        .then((firstName) => {
          console.log("Fetched first name:", firstName);
          if (firstName) {
            setUserFirstName(firstName);
          }
        })
        .catch((error) => {
          console.error("Error fetching first name:", error);
        });

      getIsCoreMember(userId)
      .then((isCoreMember) => {
        console.log("Is core member? ", isCoreMember);
        if(isCoreMember){
          setIsCoreMember(isCoreMember)
        }
      })
      .catch((error) => {
        console.error("Error fetching core member:", error);
      });
    }
  }, []);

  const getUserFirstName = async (userId) => {
    const dbRef = ref(database, `/users/${userId}/firstname`);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.error("Data not found for user:", userId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching user's first name:", error);
      return null;
    }
  };

  const getIsCoreMember = async (userId) => {
    const dbRef = ref(database, `/coreusers/${userId}/firstname`);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.error("Data not found for user:", userId);
        return null;
      }
    } catch (error) {
      console.error("Error fetching user's first name:", error);
      return null;
    }
  }

  const state = {
    title: isCoreMember ? "Welcome back, " : "Hi,",
    titleTwo: userFirstName ? userFirstName : "UOP Tiger",
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
        </div>
        <div className="contact-me">
          <button className="button"><a href="/Register">Sign up!</a></button>
          {isCoreMember && (
          <button classname="button" onClick={handleRedirect}>Core members only!</button>)}
        </div>

      </div>
      <div className="three-container">
        <Model />
      </div>
    </div><br></br><div>
       
      </div>
    
    </>
  );
}

export default Home;