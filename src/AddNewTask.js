import { defaultTasks } from "./DefaultTasks";

export default function AddNewTask({ handleAddNewTask }) {
	return (
		<div className="new-task__container">
			<h2>ADD NEW TASK</h2>
			<div className="new-task__list">
				{defaultTasks.map((task) => (
					<DefaultTask
						name={task.name}
						frequency={task.repeatFrequency}
						handleAddNewTask={handleAddNewTask}
						task={task}
					/>
				))}
				<AddCustomTaskButton />
			</div>
		</div>
	);
}

function DefaultTask({ name, frequency, handleAddNewTask, task }) {
	return (
		<div className="default-task" onClick={() => handleAddNewTask(task)}>
			<h3>{name}</h3>
			<p>{frequency}</p>
		</div>
	);
}

function AddCustomTaskButton() {
	return <div className="add-custom-task-button">ADD CUSTOM TASK</div>;
}
