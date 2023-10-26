import React from 'react';
import "./css/Footer.css";
import 'font-awesome/css/font-awesome.min.css';
//import "./BackendPage/index.html";


function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@gdscuop2183" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="https://linktr.ee/gdsc.uop" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-google"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li><a href="/ContactUs">Contact Us</a></li>
            <li><a href="#">Core Login</a></li>
            <li><a href="/Login">SignUp</a></li>
          </ul>
        </div>

        <div className="row">
          <p className="copyright">GDSC Copyright © 2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
