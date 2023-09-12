import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				//Signed in
				const user = userCredential.user;
				navigate("/home");
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.errorMessage;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<div className="signup-page__container">
			<div className="signup-page">
				<h1>GAMIFY SELF CARE</h1>
				<h2>LOGIN TO EXISTING ACCOUNT</h2>
				<form onSubmit={onLogin}>
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
					<button className="create-account-button" onClick={onLogin}>
						Log In
					</button>
				</form>
				<p>
					Don't have an account?{" "}
					<a href="sign-up">create new account</a>
				</p>
			</div>
		</div>
	);
}
