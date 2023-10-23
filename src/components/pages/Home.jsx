import React, {useEffect, useState } from "react";
import "./css/Home.css";
import "./Footer.jsx"; 
import Model from './Laptop_model.jsx'; 
import { ref, get } from "firebase/database";
import { auth, database } from "../../firebase";

function Home() {
  const [userFirstName, setUserFirstName] = useState(null);

  useEffect(() => {
    console.log("auth.currentUser:", auth.currentUser); // Debug
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      getUserFirstName(userId)
        .then((firstName) => {
          console.log("Fetched first name:", firstName); // Debug
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

  const state = {
    title: "Hi,",
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
      </div>
    <div>
      <h2>Recent Meet-Up Slides</h2>
      <iframe title="recentslides" 
      src="/meetupslides.pdf"
      width="100%" height="500px"></iframe>
    </div>
    <div>
      <h2>Recent Coding Interview Practice Slides</h2>
      <iframe title="recentpracticeslides" 
      src="/practiceslides.pdf"
      width="100%" height="500px"></iframe>
    </div>
    </>
  );
}

export default Home;