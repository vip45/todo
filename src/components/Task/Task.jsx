import React, { useState } from "react";
import "./Task.css";

const Task = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    addTask(inputValue);
    setInputValue(""); // clear input after submit
  };

  return (
    <div className="input-task-container d-flex justify-content-between">
      <input
        className="w-100 me-2"
        type="text"
        placeholder="Aim for something incredible..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default Task;
