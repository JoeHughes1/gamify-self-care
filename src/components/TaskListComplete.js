import React from "react";
import Task from "./Task";

export default function TaskListComplete({
	tasks,
	handleCompleteTask,
	onClickAdd,
}) {
	let completeTasks = tasks.filter((task) => task.complete);

	const taskList = completeTasks.map((task) => (
		<li key={task.id}>
			<Task task={task} handleCompleteTask={handleCompleteTask} />
		</li>
	));

	return (
		<>
			<div className="task-list__header">
				<h2>Completed Tasks</h2>
			</div>
			{taskList}
		</>
	);
}
