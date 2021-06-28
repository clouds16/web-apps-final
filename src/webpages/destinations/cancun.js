import cancunimage from "../../images/cancun.jpeg";
import "./destination-styles.css";

function Cancun() {
	return (
		<div class="destination-div">
			<img class="destination-images" src={cancunimage} />
			<h1 class="title"> Cabo San Lucas</h1>
			<p class="destination-text">
				{" "}
				If you are looking for picture perfect beaches , and a resort experience
				then this is the place for you.
			</p>
		</div>
	);
}

export default Cancun;
