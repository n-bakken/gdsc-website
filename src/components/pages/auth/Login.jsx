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

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            setLoginStatus(null);
            console.log("sign out successful");
            setLoginStatus("signed-out");
          })
          .catch((error) => console.log(error));
      };
    
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
