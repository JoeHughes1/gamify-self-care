import { useState } from "react";
import React from "react";

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");

	function handleSubmitCustom(e) {
		e.preventDefault();

		setTasks([
			...tasks,
			{
				name: taskName,
				points: 0,
				id: Date.now(),
				complete: false,
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
				/>
			</div>
		</>
	);
}

function TaskList({ tasks }) {
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

	const taskList = tasks.map((task) => (
		<li key={task.id}>
			<Task task={task} />
		</li>
	));

	return (
		<div>
			<h2>Today's Tasks</h2>
			{taskList}
		</div>
	);
}

function Task({ task }) {
	return (
		<ul
			key={task.id}
			className={
				task.complete ? "task-list__task complete" : "task-list__task"
			}
		>
			<h5>{task.name}</h5>
			<p>{task.points} pts</p>
			<input type="checkbox" className="task-list__task-checkbox"></input>
		</ul>
	);
}

function CustomAddTask({ onSubmit, taskName, setTaskName }) {
	const repeat = true;

	return (
		<form onSubmit={onSubmit} className="custom-task-form">
			<h2>ADD CUSTOM TASK</h2>
			<input
				type="text"
				placeholder="Add new task..."
				className="custom-task-form__name"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			></input>
			<input
				type="number"
				placeholder="points"
				className="custom-task-form__pts"
			></input>

			<span>
				<p>
					Repeat?<input type="checkbox"></input>
				</p>
				{repeat ? (
					<select className="custom-task-form__repeat">
						<option value="daily">daily</option>
						<option value="weekly">weekly</option>
						<option value="monthly">monthly</option>
					</select>
				) : (
					""
				)}
			</span>
			<button className="custom-task-form__submit">ADD</button>
		</form>
	);
}
