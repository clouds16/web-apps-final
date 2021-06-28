import "./home-components.css";
import homepageimage from "../../images/03.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function buttonClick() {
	console.log("Button has been pressed");
}

function BackgroundImg() {
	return (
		<div>
			<h1 class="homepage"> Your next beach vacation is here</h1>
			<img class="homepageimage" src={homepageimage} />
			<button class="btn btn-destinations" onClick={buttonClick}>
				<a href="/destinations">Get Started</a>
			</button>
			<button class="btn btn-about" onClick={buttonClick}>
				<a href="/about"> About Us!</a>
			</button>
		</div>
	);
}

export default BackgroundImg;
