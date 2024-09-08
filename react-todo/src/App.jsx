import React from 'react';
import TodoList from './components/TodoList'; // Import TodoList component

function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoList />  {/* Render TodoList component */}
    </div>
  );
}

export default App;
