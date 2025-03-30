// task.jsx

import React, { useState } from 'react'; 

function Task({ task, editTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, { title, dueDate, description });
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.dueDate}</p>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => toggleComplete(task.id)}>{task.complete ? "Incomplete" : "Complete"}</button>
        </>
      )}
    </div>
  );
}

export default Task;
