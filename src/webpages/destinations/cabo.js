import caboimage from "../../images/cabo.jpg";
import "./destination-styles.css";

function Cabo() {
	return (
		<div class="destination-div">
			<img class="destination-images" src={caboimage} />
			<h1 class="title"> Cabo San Lucas</h1>
			<p class="destination-text">
				{" "}
				This may be one of the mmost beautiful places on earth
			</p>
		</div>
	);
}

export default Cabo;
