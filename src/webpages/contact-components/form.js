import "./contacts.css";

//import express from "../../backend/index";

function Form() {
	const handleSubmit = (event) => {
		event.preventDefault();
		alert("You have submitted the form.");
	};

	return (
		<div class="form">
			<form
				action="/contact"
				method="post"
				class="my-form"
				onSubmit={handleSubmit}
			>
				<label for="firstname">First Name</label>
				<input
					type="text"
					id="firstname"
					name="firstname"
					placeholder="Your name.."
				/>

				<label for="lastname">Last Name</label>
				<input
					type="text"
					id="lastname"
					name="lastname"
					placeholder="Your last name.."
				/>

				<label for="email"> Email </label>
				<input
					type="text"
					id="email"
					name="electronic mail"
					placeholder="What is your email.."
				/>

				<label for="country">Country</label>
				<select id="country" name="country">
					<option placeholder="Country"></option>
					<option value="australia">Australia</option>
					<option value="canada">Canada</option>
					<option value="usa">USA</option>
					<option value="usa">Mexico </option>
					<option value="usa"> Asia </option>
					<option value="usa"> South America </option>
					<option value="usa"> Other </option>
				</select>

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Form;
