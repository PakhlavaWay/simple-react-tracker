import Button from "./Button";
import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-light p-4 mb-3 d-flex justify-content-between task ${
        task.reminder ? "reminder" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
      style={{ cursor: "pointer" }}
    >
      <div>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <div>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
