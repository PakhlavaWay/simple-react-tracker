import Task from "./Task";
import TaskMode from "./NewReminderButton";



const Tasks = ({ tasks, onDelete, onToggle, showAddMode }) => {
  
  
  
  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  );
};

export default Tasks;