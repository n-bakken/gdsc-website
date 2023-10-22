import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_sXB6RwC8_MuJMNdwg-gPWk85rW8qicI",
  authDomain: "gdsc-website-43690.firebaseapp.com",
  projectId: "gdsc-website-43690",
  storageBucket: "gdsc-website-43690.appspot.com",
  messagingSenderId: "60054267343",
  appId: "1:60054267343:web:5a17a1c61083229bcd1eba"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);

export const writeUserData = (userId, firstname, lastname, email) => {
    const userRef = ref(database, `users/${userId}`);
    
    set(userRef, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        gpoints: 0
    });
}