import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./../css/LoginRegister.css";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [acctStatus, setAcctStatus] = useState(null); // Initialize login status state

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            console.log(userCredential);
            setAcctStatus("created");
            /*writeUserData(userCredential.user.uid, name, email, pass);*/
            })
        .catch((error)=>{
            console.log(error);
            setAcctStatus("error");
        })
        setName('');
        setEmail('');
        setPass('');
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={register}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Power Cat" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="p_cat@u.pacific.edu" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Create my account</button>
        </form>
        {acctStatus === "created" && <p>Successfully created account!</p>}
        {acctStatus === "error" && <p>An error has occurred. Please try again later.</p>}
        <Link to="/Login">
        <button className="link-btn">Already have an account? Log in here</button>
    </Link>
    <Link className="link-btn" to="/Home">Return Home</Link>
    </div>
        
    )
}