import Cabo from "./destinations/cabo";
import Cancun from "./destinations/cancun";
import Huatulco from "./destinations/huatulco";
import Puerto from "./destinations/puerto";

function Destinations() {
	return (
		<div>
			<Cabo />
			<Puerto />
			<Huatulco />
			<Cancun />
		</div>
	);
}

export default Destinations;
