import React, { useState } from 'react';
import Task from './Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    setTasks([...tasks, {
      id: Math.random().toString(36).substr(2, 9),
      title,
      dueDate,
      description,
      complete: false,
    }]);
    setTitle('');
    setDueDate('');
    setDescription('');
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, complete: !task.complete } : task)));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
      <div className="tasks">
        {tasks.map(task => (
          <Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
}

export default App;


