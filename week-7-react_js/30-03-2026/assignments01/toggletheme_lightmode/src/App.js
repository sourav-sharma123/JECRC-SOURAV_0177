import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]); // immutable update
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📝 Todo App</h1>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />

            {/* Task Text */}
            <span
              style={{
                marginLeft: "10px",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            {/* Delete Button */}
            <button
              onClick={() => deleteTask(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;