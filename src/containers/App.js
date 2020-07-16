import React from 'react';
import classes from './App.module.css';
import NavBar from '../components/NavBar/NavBar'
import Background from '../components/Background/Background';
import Button from "../components/Button/Button";

function App() {
  return (
    <div className={classes.App}>
      <Background />
      <NavBar />
      <div>
        <Button label="Commercial"/>
      </div>
    </div>
  );
}

export default App;