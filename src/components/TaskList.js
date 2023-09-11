import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, handleCompleteTask }) {
	const taskList = tasks.map((task) => (
		<li key={task.id}>
			<Task task={task} handleCompleteTask={handleCompleteTask} />
		</li>
	));

	return (
		<>
			<div className="task-list__header">
				<h2>Today's Tasks</h2>
				<button className="task-list__add-button">+</button>
			</div>
			{taskList}
		</>
	);
}
