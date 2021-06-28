import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Destinations from "./destinations";

const Webpages = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/destinations" component={Destinations} />

			{/* <Route path="/destinations/cancun" component={Cancun} />
			<Route path="/destinations/PuertoEscondido" component={PuertoEscondido} />
			<Route path="/destinations/Huatulco" component={Huatulco} />
			<Route path="/destinations/Cabo" component={Cabo} /> */}
		</Router>
	);
};
export default Webpages;
