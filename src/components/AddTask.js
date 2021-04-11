import React, { Component } from "react";
import "./AddTask.sass";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    javaScript: false,
    css: false,
    html: false,
    other: false,
    typeOfTask: "",
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "js") {
      this.setState({
        javaScript: e.target.checked,
        css: false,
        html: false,
        other: false,
        typeOfTask: e.target.value,
      });
    } else if (e.target.value === "css") {
      this.setState({
        javaScript: false,
        css: e.target.checked,
        html: false,
        other: false,
        typeOfTask: e.target.value,
      });
    } else if (e.target.value === "html") {
      this.setState({
        javaScript: false,
        css: false,
        html: e.target.checked,
        other: false,
        typeOfTask: e.target.value,
      });
    } else {
      this.setState({
        javaScript: false,
        css: false,
        html: false,
        other: e.target.checked,
        typeOfTask: e.target.value,
      });
    }
  };

  handleClick = () => {
    const { text, typeOfTask } = this.state;
    if (text.length >= 2 && typeOfTask) {
      const add = this.props.add(text, typeOfTask);
      if (add) {
        this.setState({
          text: "",
          javaScript: false,
          css: false,
          html: false,
          other: false,
          typeOfTask: "",
        });
      }
    } else {
      alert(
        "Fulfill all necessary informations (task description and type of task)"
      );
    }
  };

  render() {
    const { text, javaScript, css, html, other } = this.state;
    return (
      <div className="form">
        <input
          type="text"
          className="textInput"
          placeholder="Enter task..."
          onChange={this.handleInputChange}
          value={text}
        />
        <div className="checkboxes">
          <div>
            <input
              type="checkbox"
              checked={javaScript}
              onChange={this.handleCheckboxChange}
              value="js"
            />
            <label htmlFor="javaScript"> JS </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={html}
              onChange={this.handleCheckboxChange}
              value="html"
            />
            <label htmlFor="javaScript"> HTML </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={css}
              onChange={this.handleCheckboxChange}
              value="css"
            />
            <label htmlFor="javaScript"> CSS </label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={other}
              onChange={this.handleCheckboxChange}
              value="other"
            />
            <label htmlFor="javaScript"> Other </label>
          </div>
        </div>
        <button className="btn btn-success" onClick={this.handleClick}>
          Add task!
        </button>
      </div>
    );
  }
}

export default AddTask;
