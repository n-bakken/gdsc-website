import React from "react";
import "./About.css";

function AboutUs() { 

	/*const About = () => { */
	return (
		<div className="aboutSection">
			<h1>About Google Developer Club</h1>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
			<br></br>
		</div>

	);
	/*};*/
} 

function Leadership() {


	/*const leaderShip = () => { */
		
	return (
		<div className="leaders">
			<h1>Leadership</h1>

		<div className="row">
			<div className="column">
				<h2>Nora </h2>
				<p className="leaderPosition"> Leadership Position</p>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
			</div>

			<div className="column">
				<h2>Vy</h2>
				<p className="leaderPosition">Leadership Position</p>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</p>
			</div>
			</div>
		</div>
	);
	/*}; */
}


function About() {
	return (
		<div>
			<AboutUs />
			<Leadership />
		</div>
	);
}

export default About;
