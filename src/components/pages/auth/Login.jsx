import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom"; 
import "./../css/LoginRegister.css";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then(
            (userCredential) => {console.log(userCredential)})
        .catch((error)=>{console.log(error);
        })
    }

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
          })
          .catch((error) => console.log(error));
      };
    
    return(
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className="login-form" onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="p_cat@u.pacific.edu" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link to="/Register">
        <button className="link-btn">Don't have an account? Register here</button>
    </Link>
    <Link className="link-btn" to="/Home">Return Home</Link>
    <br></br>
    <button onClick={userSignOut}>Sign Out</button>
    </div>
    )
}