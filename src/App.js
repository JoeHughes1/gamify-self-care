import { useState } from "react";
import React from "react";

export default function App() {
	return (
		<>
			<h1>Gamify Self Care</h1>
			<div className="task-list">
				<TaskList />
			</div>
		</>
	);
}

function TaskList() {
	const [tasks, setTasks] = useState([]);

	function handleSubmit() {
		setTasks((task) => [
			...tasks,
			{
				name: task.name,
				points: task.points,
				id: Date.now(),
				complete: false,
			},
		]);

		console.log(tasks);
	}

	const initialTasks = [
		{
			id: 1,
			name: "brush teeth",
			points: 10,
			repeats: true,
			cycle: 0.5,
			complete: false,
		},
		{
			id: 2,
			name: "wash face",
			points: 10,
			repeats: true,
			cycle: 0.5,
			complete: false,
		},
	];

	const taskList = initialTasks.map((task) => <Task task={task} />);

	return (
		<div>
			<h2>Today's Tasks</h2>
			<CustomAddTask onSubmit={handleSubmit} />
			{taskList}
		</div>
	);
}

function Task({ task }) {
	return (
		<div
			key={task.id}
			className={
				task.complete ? "task-list__task complete" : "task-list__task"
			}
		>
			<h5>{task.name}</h5>
			<p>{task.points} pts</p>
			<input type="checkbox"></input>
		</div>
	);
}

function CustomAddTask({ onSubmit }) {
	return (
		<form className="custom-task-form" onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Add new task..."
				className="custom-task-form__name"
			></input>
			<input
				type="number"
				placeholder="points"
				className="custom-task-form__pts"
			></input>
			<button>+</button>
		</form>
	);
}
