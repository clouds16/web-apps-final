import "./navbar.css";
import Webpages from "../webpages/index";
import About from "../webpages/about";

function Navbar() {
	return (
		<div class="topnav">
			<ul>
				<a class="active" href="/">
					Home
				</a>

				<a href="/about">About</a>
				<a href="/destinations"> Destinations</a>
				<a href="/contact">Contact</a>
			</ul>
		</div>
	);
}

export default Navbar;
