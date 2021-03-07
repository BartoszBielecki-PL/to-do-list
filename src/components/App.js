import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";

class App extends Component {
  counter = 0;
  state = {
    id: 0,
    text: "",
    isActive: false,
    isReadyToCheck: false,
    isDone: false,
    taskType: "",
    tasks: [],
  };

  addTask = (text, taskType) => {
    const task = {
      id: this.counter,
      text,
      taskType,
      isActive: true,
      isReadyToCheck: false,
      isDone: false,
    };
    this.counter++;

    const tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div>
        <AddTask add={this.addTask} />
      </div>
    );
  }
}

export default App;
