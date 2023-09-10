import React, { useState } from "react";

export default function Task({ task, handleCompleteTask }) {
	return (
		<ul
			key={task.id}
			className={
				task.complete ? "task-list__task complete" : "task-list__task"
			}
		>
			<h5>{task.name}</h5>
			{task.repeat ? (
				<p className="task-list__task-repeats">
					repeats {task.repeatFrequency}
				</p>
			) : (
				""
			)}
			<p className="task-list__task-pts">{task.points} pts</p>
			<input
				type="checkbox"
				className="task-list__task-checkbox"
				checked={task.complete}
				onChange={() => handleCompleteTask(task.id)}
			></input>
		</ul>
	);
}
