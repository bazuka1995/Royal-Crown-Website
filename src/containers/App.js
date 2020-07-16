import React from 'react';
//import classes from './App.module.css';
import NavBar from '../components/NavBar/NavBar'
import Background from '../components/Background/Background';
import Button from "../components/Button/Button";

function App() {
  return (
    <div>
      <Background />
      <NavBar />
      <Button label="Commercial"/>
    </div>
  );
}

export default App;