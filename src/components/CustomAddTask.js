import React from "react";

export default function CustomAddTask({
	onSubmit,
	taskName,
	setTaskName,
	repeat,
	setRepeat,
	frequency,
	setFrequency,
	onClickCustom,
}) {
	return (
		<div className="custom-task-form">
			<button className="x-button" onClick={onClickCustom}>
				X
			</button>
			<form onSubmit={onSubmit}>
				<h2>ADD CUSTOM TASK</h2>
				<input
					type="text"
					placeholder="Add new task..."
					className="custom-task-form__name"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
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
		</div>
	);
}
