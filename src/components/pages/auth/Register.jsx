import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth, writeUserData } from "../../../firebase";
import "../css/LoginRegister.css";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [acctStatus, setAcctStatus] = useState(null);
    //on attempting to make a new account, this function tries to write new user data to our database
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
        //try to create the new account
        .then((userCredential) => {
            console.log(userCredential);
            setAcctStatus("created");
            writeUserData(userCredential.user.uid, firstname, lastname, email);
            })
        //if email already exists, provide an error message explaining the situation
        .catch((error)=>{
            console.log(error);
            //explain the error and change state, as different types of errors exist
            if (error.code === AuthErrorCodes.EMAIL_EXISTS) { 
                setAcctStatus("email-in-use");
            }
            else if(pass.length < 6){
                setAcctStatus("short");
            }
            else{
                setAcctStatus("error");
            }
        })
        setFirstName('');
        setLastName('');
        setEmail('');
        setPass('');
    }

    //this function returns an html element of the intended page given the state of the system (dynamically shows errors if applicable) 
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <br></br>
        <form className="register-form" onSubmit={register}>
            <label htmlFor="firstname">First Name</label>
            <input value={firstname} name="firstname" onChange={(e) => setFirstName(e.target.value)} id="firstname" placeholder="Power" />
            <label htmlFor="lastname">Last Name</label>
            <input value={lastname} name="lastname" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="Cat" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="p_cat@u.pacific.edu" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Create my account</button>
        </form>
        {acctStatus === "created" && <p>Successfully created account!</p>}
        {acctStatus === "email-in-use" && <p>Email is already in use. Please choose another email.</p>}
        {acctStatus === "error" && <p>An error has occurred. Please try again later.</p>}
        {acctStatus === "short" && <p>Password needs to be at least 6 characters.</p>}
        <Link to="/Login">
        <button className="link-btn">Already have an account? Log in here</button>
    </Link>
    <Link className="link-btn" to="/Home">Return Home</Link>
    </div>
        
    )
}