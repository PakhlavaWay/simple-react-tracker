import logo from './logo.svg';
import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import NewReminderButton from './components/NewReminderButton';

function App() {
  const [addMode, setAddMode] = useState(false);
  
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    },
    
    {
      id: 2, 
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    
    {
      id: 3, 
      text: 'Food shopping',
      day: 'Feb 9th at 8:00am',
      reminder: false
    }
  ]);
  
  
  // Show add Task Mode
  
  const showAddMode = () => { 
    setAddMode(!addMode);
  }
  
  
  // Add task
  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }  
  // Delete Task 
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  // Toggle Reminder
  const onToggle = (id) => {
    setTasks( tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ));
   
  }
  
  return (
    <div className="App">
     <Header title='Task Tracker'/>
     { tasks.length !== 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} showAddMode={showAddMode} /> : 'No Tasks to Show' }
     <NewReminderButton showAddMode={showAddMode}/>
     {addMode && <AddTask addTask={addTask}/>}
    </div>
  );
}

export default App;
