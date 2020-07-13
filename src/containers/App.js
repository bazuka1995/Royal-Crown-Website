import React from 'react';
import './App.module.css';
import NavBar from '../components/NavBar/NavBar'
import Background from '../components/Background/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <NavBar />
    </div>
  );
}

export default App;