import React from "react";
import Task from "./Task";
import "./TasksList.sass";

const TasksList = (props) => {
  const activeTasks = props.tasks.filter((task) => task.isActive);
  const toCheckTasks = props.tasks.filter((task) => task.isReadyToCheck);
  const doneTasks = props.tasks.filter((task) => task.isDone);

  const activeTasksList = activeTasks.map((task) => (
    <Task
      id={task.id}
      task={task}
      delete={props.delete}
      changeStatusToCheck={props.changeStatusToCheck}
    />
  ));

  const toCheckTasksList = toCheckTasks.map((task) => (
    <Task
      id={task.id}
      task={task}
      delete={props.delete}
      repeatTask={props.repeatTask}
      completeFullyTask={props.completeFullyTask}
    />
  ));

  const doneTasksList = doneTasks.map((task) => (
    <Task id={task.id} task={task} delete={props.delete} />
  ));

  return (
    <div className="wrapTasksList">
      <div>
        <h3> Active tasks </h3>
        {activeTasksList.length > 0
          ? activeTasksList
          : "Nothing to do... Come on!"}
      </div>
      <div>
        <h3> To check tasks </h3>{" "}
        {toCheckTasksList.length > 0 ? toCheckTasksList : "Start coding!"}
      </div>
      <div>
        <h3> Done tasks </h3>{" "}
        {doneTasksList.length > 0 ? doneTasksList : "Why NOTHING is DONE!?"}
      </div>
    </div>
  );
};

export default TasksList;
