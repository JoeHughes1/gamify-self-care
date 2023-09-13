import { useEffect, useState } from "react";
import React from "react";
import PointsCounter from "./components/PointsCounter";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");
	const [points, setPoints] = useState(0);
	const [repeat, setRepeat] = useState(false);
	const [frequency, setFrequency] = useState("daily");

	const [page, setPage] = useState("home");

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
			} else {
				console.log("user is logged out");
			}
		});
	});

	function handleChangePage(page) {
		setPage(page);
	}

	function handleCompleteTask(id) {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					if (!task.complete) setPoints((prev) => prev + task.points);
					return { ...task, complete: !task.complete };
				}
				return task;
			})
		);
	}

	//handles submit button for CustomAddTask
	function handleSubmitCustom(e) {
		e.preventDefault();

		if (!taskName) return;

		setTasks([
			...tasks,
			{
				name: taskName,
				points: 10,
				id: Date.now(),
				complete: false,
				repeat: repeat,
				repeatFrequency: frequency,
			},
		]);

		setTaskName("");
	}

	//handles clicking on default task from ADD NEW TASK list
	function handleAddNewTask(task) {
		setTasks([...tasks, task]);

		console.log(task);
	}

	return (
		<>
			<Header />
			<NavBar onChangePage={handleChangePage} page={page} />
			<main>
				{page === "home" ? (
					<Home
						tasks={tasks}
						handleCompleteTask={handleCompleteTask}
						onSubmit={handleSubmitCustom}
						taskName={taskName}
						setTaskName={setTaskName}
						repeat={repeat}
						setRepeat={setRepeat}
						frequency={frequency}
						setFrequency={setFrequency}
						handleAddNewTask={handleAddNewTask}
						points={points}
					/>
				) : page === "stats" ? (
					<Stats />
				) : page === "profile" ? (
					<Profile />
				) : (
					<Settings />
				)}
			</main>
			<footer></footer>
		</>
	);
}
