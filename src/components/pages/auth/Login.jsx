import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom"; 
import "../css/LoginRegister.css";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loginStatus, setLoginStatus] = useState(null); // Initialize login status state
    const [errorMessage, setErrorMessage] = useState('');

    //this function attempts to authenticate user information with firebase
    //if an account exists and the user inputted correct login information, then they are logged in
    //if not, an error message is shown and the state of the pages does not change
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            setLoginStatus("signed-in");
            setErrorMessage('');
            console.log(userCredential);
        })
        .catch((error) => {
            setLoginStatus("error"); // Set login status to "error"
            setErrorMessage("Invalid email and password combination");
            console.log(error);
        })
        // Clear the form fields
        setEmail('');
        setPass('');
    }

    //if logged in, the user has the option to sign out and return the state of the website to defaults
    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            setLoginStatus(null);
            console.log("sign out successful");
            setLoginStatus("signed-out");
          })
          .catch((error) => console.log(error));
      };
    //this function returns an html element of the intended page given the state of the system (dynamically shows errors if applicable) 
    return(
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="p_cat@u.pacific.edu" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="button" type="submit">Log In</button>
            </form>
            {loginStatus === "signed-in" && <p>Successfully signed in!</p>}
            {loginStatus === "error" && <p className="errorMessage">{errorMessage}</p>}
            {loginStatus === "signed-out" && <p>Successfully signed out.</p>}
            <Link to="/Register">
                <button className="link-btn">Don't have an account? Register here</button>
            </Link>
            <Link className="link-btn" to="/Home">Return Home</Link>
            <br></br>
            <button className="button" onClick={userSignOut}>Sign Out</button>
            <br></br>
            
        </div>
    )
}
