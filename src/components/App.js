import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";

class App extends Component {
  state = {};

  render() {
    const { text, important, date } = this.state;
    return (
      <div>
        <AddTask value={text} important={important} date={date} />
      </div>
    );
  }
}

export default App;
