import React from "react";
import "./css/About.css";
import Footer from './Footer';  
import Navbar from './Home'; 


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
			<div className="columnDean">
				<div className= "leaderImages">
					<img src="images/dean.jpeg" alt = "Dean Shin" ></img>
				</div>
				
				<h2>Dean Shin </h2>
				<p className="leaderPosition2"> Founder</p>
				<p> I am a class of 2023 alumni of University of Pacific who is interested in full-stack development and competitive coding. 
					I also have interests in puzzle games, Jazz, and VTubers! To me, GDSC UOP was community--it allowed me to meet like-minded 
					people who had both similar and different passions. I hope that at GDSC everyone can continue to both learn, and teach one another in the future!
				</p>
			</div>
			</div>

		<div className="row">
			<div className="column">
				<div className= "leaderImagesNora">
					<img src="images/nora.jpg" alt = "Nora" ></img>
				</div>
				<h2>Nora Bakken</h2>
				<p className="leaderPosition2">President</p>
				<p> Hi, I’m Nora and I’m the President of GDSC! I’m a senior graduating this Fall, and I’m planning to continue in the Masters 
					program here and graduate in Spring 2025. I’m interested in a lot of aspects of CS, but I really like learning about 
					programming language syntax and semantics, and how to improve user experience with well-engineered software. I look forward 
					to meeting you all this year!
				</p>
			</div>

			<div className="column">
			<div className= "leaderImagesVy">
					<img src="images/vy.JPG" alt = "Vy" ></img>
				</div>
				<h2>Vy Nguyen</h2>
				<p className="leaderPosition">Vice President</p>
				<p> Hi, my name is Vy. I am a junior studying Computer Science with a passion for UI/UX and web development. As the Vice President
					 of GDSC, I'm looking forward to exploring the world of technology, and collaborating with our members!
				</p>
			</div>
			</div>

		<div className="row2">
			<div className="column2">
				<div className= "leaderImages2">
					<img src="images/merry.png" alt = "Merry" ></img>
				</div>
				<h2>Merry Chea </h2>
				<p className="leaderPosition"> Marketing Lead</p>
				<p> My name is Merry Chea and I am a first year graduate student at the University of the Pacific! I pursued an undergraduate degree
					 in Biochemistry at UOP for three years. After graduating, I made the big decision to transition careers, and now I am back at UOP 
					 to earn my Master of Science degree in Computer Science!
				</p>
			</div>

			<div className="column2">
			<div className= "leaderImages2">
					<img src="images/young.jpg" alt = "Young" ></img>
				</div>
				<h2>Young Song</h2>
				<p className="leaderPosition2">Treasurer</p>
				<p> Hi, my name is Young Song. I'm currently a senior doing my co-op and I graduate Spring 2024. I came to UOP originally as a 
					pre-pharmacy major but switched to cs. Two fields that I'm currently interested in are software development and AI. I hope you guys
					 find value in this club and I look forward to meeting you all.
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
			<Navbar />
			<Footer />
		</div>
	);
}

export default About;
