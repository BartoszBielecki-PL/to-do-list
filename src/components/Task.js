import React from "react";
import "./Task.sass";

const Task = (props) => {
  const { text, isActive, isDone, isReadyToCheck, taskType, id } = props.task;

  if (isActive) {
    return (
      <div key={id}>
        <p>
          [{taskType.toUpperCase()}] {text}
          <button
            className="btn btn-success"
            onClick={() => props.changeStatusToCheck(id)}
          >
            Done!
          </button>
          <button className="btn btn-danger" onClick={() => props.delete(id)}>
            Delete!
          </button>
        </p>
      </div>
    );
  }

  if (isReadyToCheck) {
    return (
      <div key={id} className="singleTask">
        <p>
          [{taskType.toUpperCase()}] {text}
          <button
            className="btn btn-success"
            onClick={() => props.completeFullyTask(id)}
          >
            Done!
          </button>
          <button
            className="btn btn-warning"
            onClick={() => props.repeatTask(id)}
          >
            Repeat!
          </button>
          <button className="btn btn-danger" onClick={() => props.delete(id)}>
            Delete!
          </button>
        </p>
      </div>
    );
  }

  if (isDone) {
    return (
      <div key={id} className="wrapTask">
        <p>
          [{taskType.toUpperCase()}] {text}
        </p>
        <button className="btn btn-danger" onClick={() => props.delete(id)}>
          Delete!
        </button>
      </div>
    );
  }
};

export default Task;
