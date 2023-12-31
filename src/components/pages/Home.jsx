import React, {useEffect, useState } from "react";
import "./css/Home.css";
import "./Footer.jsx"; 
import Model from './Laptop_model.jsx'; 
import { ref, get } from "firebase/database";
import { auth, database } from "../../firebase";

function Home() {
  const [userFirstName, setUserFirstName] = useState(null);
  const [isCoreMember, setIsCoreMember] = useState(null);
  const [randomQuestion, setRandomQuestion] = useState("");
  //redirect a core user to the admin page if they so desire
  const handleRedirect = () => {
    const userChoice = window.confirm("Hi core member! Do you want to be redirected to the AdminPage?");
    if (userChoice) {
      window.location.href = '/Admin';
    }
  };
  //create an array of leetcode questions to randomly grab from on website load
  const leetcodeQuestions = [
      "Two Sum",
      "Add Two Numbers",
      "Longest Substring Without Repeating Characters",
      "Median of Two Sorted Arrays",
      "Longest Palindromic Substring",
      "ZigZag Conversion",
      "Reverse Integer",
      "String to Integer (atoi)",
      "Palindrome Number",
      "Regular Expression Matching",
      "Container With Most Water",
      "Integer to Roman",
      "Roman to Integer",
      "Longest Common Prefix",
      "3Sum",
      "3Sum Closest",
      "Letter Combinations of a Phone Number",
      "4Sum",
      "Remove Nth Node From End of List",
      "Valid Parentheses",
      "Merge Two Sorted Lists",
      "Generate Parentheses",
      "Merge k Sorted Lists",
      "Swap Nodes in Pairs",
      "Reverse Nodes in k-Group",
      "Remove Duplicates from Sorted Array",
      "Remove Element",
      "Implement strStr()",
      "Divide Two Integers",
      "Substring with Concatenation of All Words",
      "Next Permutation",
      "Longest Valid Parentheses",
      "Search in Rotated Sorted Array",
      "Search Insert Position",
      "Valid Sudoku",
      "Sudoku Solver",
      "Count and Say",
      "Combination Sum",
      "Combination Sum II",
      "First Missing Positive",
      "Trapping Rain Water",
      "Multiply Strings",
      "Wildcard Matching",
      "Jump Game",
      "Permutations",
      "Permutations II",
      "Rotate Image",
      "Group Anagrams",
      "Pow(x, n)",
      "Spiral Matrix",
      "Jump Game II",
      "Merge Intervals",
      "Insert Interval",
      "Length of Last Word",
      "Spiral Matrix II",
      "Permutation Sequence",
      "Rotate List",
      "Unique Paths",
      "Minimum Path Sum",
      "Valid Number",
      "Plus One",
      "Add Binary",
      "Text Justification",
      "Sqrt(x)",
      "Climbing Stairs",
      "Simplify Path",
      "Edit Distance",
      "Set Matrix Zeroes",
      "Search a 2D Matrix",
      "Unique Paths II",
      "Minimum Window Substring",
      "Sort Colors",
      "Minimum Size Subarray Sum",
      "Subsets",
      "Word Search",
      "Largest Rectangle in Histogram",
      "Maximal Rectangle",
      "Partition List",
      "Reverse Linked List II",
      "Palindrome Partitioning",
      "Scramble String",
      "Merge Sorted Array",
      "Gray Code",
      "Subsets II",
      "Decode Ways",
      "Climbing Stairs",
      "Delete Operation for Two Strings",
      "Unique Binary Search Trees",
      "Maximum Subarray",
      "House Robber",
      "Word Ladder",
      "Word Ladder II",
      "Edit Distance",
      "Minimum Window Substring",
      "Longest Increasing Subsequence",
      "Alien Dictionary",
      "Number of Islands",
      "Course Schedule",
      "Longest Consecutive Sequence",
      "Word Break",
      "Word Break II",
      "Largest Divisible Subset",
      "Russian Doll Envelopes" 
  ];
  //website randomly chooses a question when loaded
  const setRandomLeetcodeQuestion = () => {
    const randomIndex = Math.floor(Math.random() * leetcodeQuestions.length);
    setRandomQuestion(leetcodeQuestions[randomIndex]);
  };
  //fetch the first name of the user to provide a personalized message, write to console if it is not found
  //check if user is a core member for further personalization
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
    setRandomLeetcodeQuestion();
  }, []);
  //grab user first name from database
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
  //write to console if core member status could not be found
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
  //personalize welcome message if logged in, provide defaults if not
  const state = {
    title: isCoreMember ? "Welcome back, " : "Hi,",
    titleTwo: userFirstName ? userFirstName : "UOP Tiger",
    titleThree: "Welcome to our Club",
    Image: "images/Logo.png",
  };

  //return all objects of home page--non changing elements are hardcoded (static)
  return (
    <><div className="home">
      <div className="home-intro">
        <h2>
          <div className="title">{state.title}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
        </h2>
        <div className="contact-me">
          <button className="button"><a href="/Register">Sign up!</a></button>
          {isCoreMember && (
          <button classname="button" onClick={handleRedirect}>Core members only!</button>)}
        </div>

        </div>
          <div className="three-container">
            <Model />
          </div>
        </div>


    <div class="floating-box" style={{float: "right"}}>
        <div class="box-text">
          <h2>Our Mission</h2>
          <p>We are a computer science club committed to creating a strong CS community on campus with both social and learning opportunities.</p>
        </div>
    </div>
    
    <div class="floating-box" style={{float: "left"}}>
        <div class="box-text">
          <h2>How can I get more involved?</h2>
          <p>Join our Discord and message a core member to see how you can get more involved!</p>
        </div>
    </div>

    <div class="floating-box" style={{float: "right"}}>
        <div class="box-text">
          <h2>Leetcode Question</h2>
          <p>{randomQuestion}</p>
          <button className="button"><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
            Take me there!
          </a> </button>
        </div>
    </div>

    <div class="floating-box" style={{float: "left"}}>
        <div class="box-text">
          <h2>Contribute to this site!</h2>
          <p>Want to help develop this site? See our GitHub repo <a href="https://github.com/n-bakken/gdsc-website" target="_blank" rel="noopener noreferrer">
            here!
          </a></p>
        </div>
    </div>
    
    </>
  );
}

export default Home;