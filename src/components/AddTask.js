import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  
  const onAddTask = (e) => {
    e.preventDefault();
    
    if (!text) {
      alert('Please add a task');
      return;
    }
    
    addTask( {text, day, reminder} );
    
    setText('');
    setDay('');
    setReminder('');
    
  }
  

  return (
    <form className="add-form" onSubmit={onAddTask}>
      <div className="form-control" >
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day & time</label>
        <input
          type="text"
          placeholder="Add Task"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label
          className="set-reminder"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          Set reminder
        </label>
        <input
          className="checkbox"
          type="checkbox"
          placeholder="Add Task"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <button className="btn bg-black text-white">Save Task</button>
    </form>
  );
};

export default AddTask;
