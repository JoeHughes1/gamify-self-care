import CustomAddTask from "../components/CustomAddTask";
import TaskList from "../components/TaskList";
import AddNewTask from "../components/AddNewTask";

export default function Home(props) {
	return (
		<>
			<div className="task-list">
				<TaskList
					tasks={props.tasks}
					handleCompleteTask={props.handleCompleteTask}
				/>
			</div>

			<div className="custom-add-task__container">
				<CustomAddTask
					onSubmit={props.onSubmit}
					taskName={props.taskName}
					setTaskName={props.setTaskName}
					repeat={props.repeat}
					setRepeat={props.setRepeat}
					frequency={props.frequency}
					setFrequency={props.setFrequency}
				/>
			</div>

			<div>
				<AddNewTask handleAddNewTask={props.handleAddNewTask} />
			</div>
		</>
	);
}
