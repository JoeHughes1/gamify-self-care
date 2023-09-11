export default function NavBar({ onChangePage, page }) {
	return (
		<ul className="nav-bar">
			<li
				className={page === "home" && "nav-bar__active-item"}
				onClick={() => onChangePage("home")}
			>
				Home
			</li>
			<li
				className={page === "stats" && "nav-bar__active-item"}
				onClick={() => onChangePage("stats")}
			>
				Stats
			</li>
			<li
				className={page === "profile" && "nav-bar__active-item"}
				onClick={() => onChangePage("profile")}
			>
				Profile
			</li>
			<li
				className={page === "settings" && "nav-bar__active-item"}
				onClick={() => onChangePage("settings")}
			>
				Settings
			</li>
		</ul>
	);
}
