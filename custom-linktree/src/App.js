// src/App.js
import React from 'react';
import './App.css';
import Linktree from './components/Linktree'; // Import the Linktree component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Linktree /> {/* Render the Linktree component */}
      </header>
    </div>
  );
}

export default App;
