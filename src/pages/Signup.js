import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function SignUp() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				//Signed in
				const user = userCredential.user;
				console.log(user);
				navigate("/login");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<div className="signup-page__container">
			<div className="signup-page">
				<h1>GAMIFY SELF CARE</h1>
				<h2>CREATE NEW ACCOUNT</h2>
				<form onSubmit={() => onSubmit}>
					<label htmlFor="email-address">Email Address</label>
					<input
						type="text"
						label="Email Address"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					></input>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						label="Password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					></input>
					<button
						className="create-account-button"
						onClick={onSubmit}
					>
						Create Account
					</button>
				</form>
				<p>
					Already have an account? <a href="login">login</a>
				</p>
			</div>
		</div>
	);
}
