import React from "react";

export default function CustomAddTask({
	onSubmit,
	taskName,
	setTaskName,
	points,
	setPoints,
	repeat,
	setRepeat,
	frequency,
	setFrequency,
}) {
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
				value={points}
				onChange={(e) => setPoints(e.target.value)}
			></input>

			<span>
				<p>
					Repeat?
					<input
						type="checkbox"
						value={repeat}
						onChange={() => setRepeat(!repeat)}
					></input>
				</p>
				{repeat ? (
					<select
						className="custom-task-form__repeat"
						value={frequency}
						onChange={(e) => setFrequency(e.target.value)}
					>
						<option value="daily">daily</option>
						<option value="weekly">weekly</option>
						<option value="monthly">monthly</option>
					</select>
				) : (
					<></>
				)}
			</span>
			<button className="custom-task-form__submit">ADD</button>
		</form>
	);
}
