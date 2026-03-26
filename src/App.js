import React from 'react';
import './App.css';
import Student from './components/Student'; // Importing Part C

function App() {
  const showAlert = () => {
    alert("Welcome to React Learning!"); // Part E Interaction
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
        <p>Course: SE Sem IV</p>
        <p>I am learning how to build modern UIs with React components.</p>
        
        {/* Using the Student Component */}
        <Student /> 

        {/* Part E: Button */}
        <button onClick={showAlert} className="my-button">
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;