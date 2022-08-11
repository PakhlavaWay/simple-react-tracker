import React from "react";
import Button from "./Button";
import { FaPlusCircle } from "react-icons/fa";

const NewReminderButton = ( { showAddMode } ) => {
  return (
    <div
      className="new-reminder mb-3"
      onClick={showAddMode}
      style={{ cursor: "pointer" }}
    >
      <FaPlusCircle />
      <Button text="New Reminder" />
    </div>
  );
};

export default NewReminderButton;
