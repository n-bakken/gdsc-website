import React, { useState, useEffect } from 'react';
import { ref, get } from "firebase/database";
import { database } from "../../firebase";
import "./css/GPoints.css";
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const GPoints = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, 'users');

    const fetchLeaderboard = async () => {
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.entries(data);
          dataArray.sort((a, b) => b[1].gpoints - a[1].gpoints);
          setLeaderboardData(dataArray);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();

    // No need to manually clean up the Firebase listener, as we're using a one-time fetch

  }, []);

  return (
    <div>
      <Navbar />
      <br></br>
      <h1 className="contact__title">GPoints!</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map(([userId, userData], index) => (
            <tr key={userId}>
              <td>{index + 1}</td>
              <td>{userData.firstname} {userData.lastname}</td>
              <td>{userData.gpoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <p className="paragraph__text">At the end of the semester, a raffle will be held. Each GPoint is one raffle ticket!</p>
      <Footer />
    </div>
    
  );
};

export default GPoints;
