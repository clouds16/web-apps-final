import testimonialimage3 from "../../images/testimonial3.jpg";

function ThirdTestimonial() {
	return (
		<div class="Testimonial">
			<img class="review-images" src={testimonialimage3} />

			<h3 class="review-title">One of the best trips I have ever taken! </h3>
			<p class="rating">
				{" "}
				The group is so friendly and they would go out of the way to make sure
				the trip was as enjoyable as possible!
			</p>
		</div>
	);
}

export default ThirdTestimonial;
