import React from "react";
import Footer from './Footer';  
import Navbar from './Navbar';
import "./css/Resources.css"

// displays GDSC's events calendar, recent meet up slides and recent coding slides on the resources pages 
function Resources() {
    return(
        <>
            <Navbar />

           <div className="calendar"> 
                <h1> GDSC Events Calendar</h1> 
                <iframe title="calendar" className="calendar"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=America%2/Los_Angeles&showPrint=0&showTz=1&showTabs=1&showDate=1&src=Z2RzYy51b3BAZ21haWwuY29t&color=%230B8043"
                style={{ borderWidth: 0, width: "800px", height: "600px", margin: 0, padding: 0 }}
                frameBorder={0}
                scrolling="no"
                ></iframe>
            </div> 

            <div className="slides">
                <h2>Recent Meet-Up Slides</h2>
                <iframe className="recentslides" title="recentslides"
                src="/meetupslides.pdf"
                ></iframe>
            </div>
            <div className="slides">
                <h2>Recent Coding Interview Practice Slides</h2>
                <iframe className="recentpracticeslides" title="recentpracticeslides" 
                src="/practiceslides.pdf"
                width="100%" height="500px"></iframe>
            </div>
            <Footer />
        </>
    );
}

export default Resources;