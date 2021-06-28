import testimonialimage1 from "../../images/testimonial2.jpg";

function FirstTestimonial() {
	return (
		<div class="Testimonial">
			<img class="review-images" src={testimonialimage1} />

			<h3 class="review-title">One of the best trips I have ever taken! </h3>
			<p class="rating">
				{" "}
				The group is so friendly and they would go out of the way to make sure
				the trip was as enjoyable as possible!
			</p>
		</div>
	);
}

export default FirstTestimonial;
