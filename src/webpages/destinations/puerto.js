import puertoimage from "../../images/puerto.jpeg";
import "./destination-styles.css";

function Puerto() {
	return (
		<div class="destination-div">
			<img class="destination-images" src={puertoimage} />
			<h1 class="title"> Puerto Escondido </h1>
			<p class="destination-text">
				{" "}
				If you want to visit a beautiful beach and adventure
			</p>
		</div>
	);
}

export default Puerto;
