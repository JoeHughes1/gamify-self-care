import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <SignUp />,
		errorElement: <ErrorPage />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "sign-up",
		element: <SignUp />,
	},
	{
		path: "home",
		element: <App />,
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
