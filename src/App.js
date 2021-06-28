import logo from "./logo.svg";
import "./App.css";
import Webpages from "./webpages/index";
import Navbar from "./attributes/navbar";
import Footer from "./attributes/footer";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Webpages></Webpages>
			<Footer />
		</div>
	);
}

export default App;
