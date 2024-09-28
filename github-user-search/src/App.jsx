import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-bold">GitHub User Search</h1>
      </header>
      <main className="p-4">
        <Search />
      </main>
    </div>
  );
}

export default App;
