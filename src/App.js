import { useState } from "react";
import React from "react";
import CustomAddTask from "./CustomAddTask";
import TaskList from "./TaskList";
import AddNewTask from "./AddNewTask";
import PointsCounter from "./PointsCounter";

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");
	const [points, setPoints] = useState(0);
	const [repeat, setRepeat] = useState(false);
	const [frequency, setFrequency] = useState("daily");

	function handleCompleteTask(id) {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					setPoints((prev) => prev + task.points);
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
			<h1>Gamify Self Care</h1>
			<div className="task-list">
				<TaskList
					tasks={tasks}
					handleCompleteTask={handleCompleteTask}
				/>
			</div>
			<div className="custom-add-task__container">
				<CustomAddTask
					onSubmit={handleSubmitCustom}
					taskName={taskName}
					setTaskName={setTaskName}
					repeat={repeat}
					setRepeat={setRepeat}
					frequency={frequency}
					setFrequency={setFrequency}
				/>
			</div>
			<div>
				<AddNewTask handleAddNewTask={handleAddNewTask} />
			</div>
			<PointsCounter points={points} />
		</>
	);
}
