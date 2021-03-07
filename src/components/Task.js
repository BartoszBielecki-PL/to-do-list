import React from "react";

const Task = (props) => {
  const { text, isActive, isDone, isReadyToCheck, taskType, id } = props.task;

  if (isActive) {
    return (
      <div key={id}>
        <p>
          [{taskType.toUpperCase()}] {text}
          <button
            className="approveButton"
            onClick={() => props.changeStatusToCheck(id)}
          >
            Done!
          </button>
          <button className="deleteButton" onClick={() => props.delete(id)}>
            Delete!
          </button>
        </p>
      </div>
    );
  }

  if (isReadyToCheck) {
    return (
      <div key={id}>
        <p>
          [{taskType.toUpperCase()}] {text}
          <button
            className="approveButton"
            onClick={() => props.completeFullyTask(id)}
          >
            Done!
          </button>
          <button className="repeat" onClick={() => props.repeatTask(id)}>
            Repeat!
          </button>
          <button className="deleteButton" onClick={() => props.delete(id)}>
            Delete!
          </button>
        </p>
      </div>
    );
  }

  if (isDone) {
    return (
      <div key={id}>
        <p>
          [{taskType.toUpperCase()}] {text}
          <button className="deleteButton" onClick={() => props.delete(id)}>
            Delete!
          </button>
        </p>
      </div>
    );
  }
};

export default Task;
