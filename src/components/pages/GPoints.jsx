import React, { useRef, useState, useEffect } from 'react';
import { orderByChild, limitToLast, query } from 'firebase/database';
import { ref, get } from "firebase/database";
import { auth, database } from "../../firebase";
import "./css/GPoints.css";
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const GPoints = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Reference to your Firebase database
    const dbRef = ref(database, 'users');

    const leaderboardQuery = query(
      dbRef,
      orderByChild('gpoints'), // Assuming 'gpoints' is the field for points
      limitToLast(5) // Limit to the top 5 users
    );

    const fetchLeaderboard = async () => {
      try {
        const snapshot = await get(leaderboardQuery);
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Convert Firebase data into an array
          const dataArray = Object.entries(data);
          // Sort the array by points in descending order
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
