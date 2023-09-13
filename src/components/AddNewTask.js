import { defaultTasks } from "./DefaultTasks";

export default function AddNewTask({ handleAddNewTask, onClickCustom }) {
	return (
		<div className="new-task__container">
			<h2>ADD NEW TASK</h2>
			<div className="new-task__list">
				{defaultTasks.map((task) => (
					<DefaultTask
						key={task.id}
						name={task.name}
						frequency={task.repeatFrequency}
						handleAddNewTask={handleAddNewTask}
						task={task}
					/>
				))}
			</div>
			<AddCustomTaskButton onClickCustom={onClickCustom} />
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

function AddCustomTaskButton({ onClickCustom }) {
	return (
		<div className="add-custom-task-button" onClick={onClickCustom}>
			ADD CUSTOM TASK
		</div>
	);
}
