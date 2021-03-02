import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    important: false,
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({
      important: e.target.checked,
    });
  };

  render() {
    const { text, important } = this.state;
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Wpisz zadanie"
          onChange={this.handleInputChange}
          value={text}
        />
        <input
          type="checkbox"
          checked={important}
          onChange={this.handleCheckboxChange}
        />
        <label htmlFor="important">Priorytet</label>
      </div>
    );
  }
}

export default AddTask;
