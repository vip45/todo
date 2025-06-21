import React, { useState } from "react";
import "./Home.css";
import User from "../components/User/User";
import ToDo from "../components/ToDo/ToDo";
import Task from "../components/Task/Task";

const Home = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTask([...tasks, newTask]);
    }
  };

  return (
    <div className="home-container">
      <div className="create-task">
        <Task addTask={addTask} />
      </div>
      <div className="home-container-main d-flex justify-content-center flex-wrap gap-4">
        <User />
        <ToDo tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;
