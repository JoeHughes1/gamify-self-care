import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, handleCompleteTask, onClickAdd }) {
	let incompleteTasks = tasks.filter((task) => !task.complete);

	const taskList = incompleteTasks.map((task) => (
		<li key={task.id}>
			<Task task={task} handleCompleteTask={handleCompleteTask} />
		</li>
	));

	return (
		<>
			<div className="task-list__header">
				<h2>Today's Tasks</h2>
				<button className="task-list__add-button" onClick={onClickAdd}>
					+
				</button>
			</div>
			{tasks.length === 0 ? (
				<p>click the plus to start adding tasks!</p>
			) : incompleteTasks.length === 0 ? (
				<p>Congrats! You completed all tasks today!</p>
			) : (
				""
			)}
			{taskList}
		</>
	);
}
