import React, { useState } from 'react';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addToList = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  return (
    <div className='wrapper'>
      <h1 className='todo'>ToDo List</h1>
      <div className='container'>
        <input className='toDo'
          type="text"
          placeholder="Добавить задачу"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className='ToDo' onClick={addToList}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li className='li_todo' key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;