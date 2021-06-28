import ProfileImage from "./about-components/profile-image";
import Summary from "./about-components/summary";
import Testimonial1 from "./about-components/testimonial1";
import Testimonial2 from "./about-components/testimonial2";
import Testimonial3 from "./about-components/testimonial3";

function About() {
	return (
		<div>
			<ProfileImage />
			<Summary />
			<Testimonial1 />
			<Testimonial2 />
			<Testimonial3 />
		</div>
	);
}

export default About;
