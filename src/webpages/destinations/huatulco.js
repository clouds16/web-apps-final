import huatulcoimage from "../../images/huatulco.jpg";
import "./destination-styles.css";

function Huatulco() {
	return (
		<div class="destination-div">
			<img class="destination-images" src={huatulcoimage} />
			<h1 class="title"> Cabo San Lucas</h1>
			<p class="destination-text">
				{" "}
				The hidden gem of this list, Huatulco is beautiful yet not too populated
				yet. Adventure the jungle once you are done swimming.
			</p>
		</div>
	);
}

export default Huatulco;
