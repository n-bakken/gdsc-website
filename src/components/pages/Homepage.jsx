import React from 'react'
import Home from './Home'; 
import Footer from './Footer';  
import Navbar from './Navbar';
//create homepage object with navbar and footer wrapping it 
const homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <br></br>
      <Footer/>
    </div>
  )
}

export default homepage;
