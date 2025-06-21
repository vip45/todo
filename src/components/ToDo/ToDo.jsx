import React from "react";
import "./ToDo.css";

const ToDo = ({ tasks }) => {
  return (
    <div className="todo-main">
      <div className="todo-container">
        <div className="todo-heading">
          <p>Task Name</p>
          <p>Status</p>
        </div>
        <div className="todo-tasks">
          {tasks.length === 0 ? (
            <div className="no-task text-center">
              <img
                src="./resources/images/cat.gif"
                alt="No tasks"
                className="img-fluid"
              />
              <p className="mt-2">
                No tasks available. Add something awesome! 💡
              </p>
            </div>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <div className="task-main">
                    <p className="task-name">{task}</p>
                    <div className="task-status">
                      <button>Archive</button>
                      <button>Done</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
