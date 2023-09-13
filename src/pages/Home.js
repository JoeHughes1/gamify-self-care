import CustomAddTask from "../components/CustomAddTask";
import TaskList from "../components/TaskList";
import AddNewTask from "../components/AddNewTask";
import { useState } from "react";
import TaskListComplete from "../components/TaskListComplete.js";
import PointsCounter from "../components/PointsCounter";

export default function Home(props) {
	const [addTask, setAddTask] = useState(false);
	const [addCustomTask, setAddCustomTask] = useState(false);

	//shows ADD NEW TASK window
	function handleClickAdd() {
		setAddTask(!addTask);
	}

	//shows ADD CUSTOM TASK window
	function handleClickCustom() {
		setAddCustomTask(!addCustomTask);
	}

	return (
		<>
			<div className="task-list">
				<TaskList
					tasks={props.tasks}
					handleCompleteTask={props.handleCompleteTask}
					onClickAdd={handleClickAdd}
				/>
				<TaskListComplete
					tasks={props.tasks}
					handleCompleteTask={props.handleCompleteTask}
					onClickAdd={handleClickAdd}
				/>
			</div>

			{addCustomTask && (
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
			)}

			{addTask && (
				<div>
					<AddNewTask
						handleAddNewTask={props.handleAddNewTask}
						onClickCustom={handleClickCustom}
					/>
				</div>
			)}
		</>
	);
}
