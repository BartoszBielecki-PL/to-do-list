import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TasksList from "./TasksList";

class App extends Component {
  counter = 0;
  state = {
    tasks: [],
  };

  addNewTask = (text, taskType) => {
    const task = {
      id: this.counter,
      text: text,
      taskType: taskType,
      isActive: true,
      isReadyToCheck: false,
      isDone: false,
    };

    let tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({
      tasks,
    });
    this.counter++;
    return true;
  };

  changeStatusToCheck = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
        task.isReadyToCheck = true;
      }
    });

    this.setState({
      tasks,
    });
  };

  repeatTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = true;
        task.isReadyToCheck = false;
      }
    });

    this.setState({
      tasks,
    });
  };

  completeFullyTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isReadyToCheck = false;
        task.isDone = true;
      }
    });

    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);

    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="wrap">
        <AddTask add={this.addNewTask} />
        <TasksList
          tasks={tasks}
          delete={this.deleteTask}
          changeStatusToCheck={this.changeStatusToCheck}
          repeatTask={this.repeatTask}
          completeFullyTask={this.completeFullyTask}
        />
      </div>
    );
  }
}

export default App;
