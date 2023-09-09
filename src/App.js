import { useState } from "react";
import React from "react";

export default function App() {
	function TaskList() {
		const initialTasks = [
			{
				id: 1,
				name: "brush teeth",
				points: 10,
				repeats: true,
				cycle: 0.5,
			},
			{
				id: 2,
				name: "wash face",
				points: 10,
				repeats: true,
				cycle: 0.5,
			},
		];

		return initialTasks.map((task) => (
			<div className="task-list">
				<Task name={task.name} key={task.id} />
			</div>
		));
	}

	function Task({ name, key }) {
		return (
			<div key={key} className="task-list__task">
				<p>task name</p>
				<input type="checkbox"></input>
				<p>points</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Gamify Self Care</h1>
			<TaskList />
		</div>
	);
}
