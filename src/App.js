import { useState } from "react";
import React from "react";
import CustomAddTask from "./CustomAddTask";
import TaskList from "./TaskList";

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");
	const [points, setPoints] = useState(null);
	const [repeat, setRepeat] = useState(false);
	const [frequency, setFrequency] = useState("daily");

	//handles submit button for CustomAddTask
	function handleSubmitCustom(e) {
		e.preventDefault();

		setTasks([
			...tasks,
			{
				name: taskName,
				points: points,
				id: Date.now(),
				complete: false,
				repeat: repeat,
				repeatFrequency: frequency,
			},
		]);

		setTaskName("");

		console.log(tasks);
	}

	return (
		<>
			<h1>Gamify Self Care</h1>
			<div className="task-list">
				<TaskList tasks={tasks} />
			</div>
			<div className="custom-add-task__container">
				<CustomAddTask
					onSubmit={handleSubmitCustom}
					taskName={taskName}
					setTaskName={setTaskName}
					points={points}
					setPoints={setPoints}
					repeat={repeat}
					setRepeat={setRepeat}
					frequency={frequency}
					setFrequency={setFrequency}
				/>
			</div>
		</>
	);
}
