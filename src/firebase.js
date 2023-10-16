// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_sXB6RwC8_MuJMNdwg-gPWk85rW8qicI",
  authDomain: "gdsc-website-43690.firebaseapp.com",
  projectId: "gdsc-website-43690",
  storageBucket: "gdsc-website-43690.appspot.com",
  messagingSenderId: "60054267343",
  appId: "1:60054267343:web:5a17a1c61083229bcd1eba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);