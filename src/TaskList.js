import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
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
