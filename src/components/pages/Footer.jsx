import React from 'react';
import "./css/Footer.css";
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
          <a href="./www.apple.com"><i className="fa fa-instagram"></i></a>
          <a href="./www.apple.com"><i className="fa fa-youtube"></i></a>
          
        </div>

        <div className="row">
          <ul>
            <li><a href="www.apple.com">Contact us</a></li>
            <li><a href="www.apple.com">Terms & Conditions</a></li>
            <li><a href="www.apple.com">SignUp</a></li>
          </ul>
        </div>

        <div className="row">
          GDSC Copyright © 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
