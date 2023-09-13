import { useNavigate } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Header() {
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				//Sign-out successful
				navigate("/login");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<header className="header">
			<h1 className="logo">Gamify Self Care</h1>
			<div>
				<ProfileImage />
				<button onClick={handleLogout}>log out</button>
			</div>
		</header>
	);
}
