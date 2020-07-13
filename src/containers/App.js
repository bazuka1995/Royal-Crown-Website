import React from 'react';
import classes from './App.module.css';
import NavBar from '../components/NavBar/NavBar'
import Background from '../components/Background/Background';

function App() {
  return (
    <div className={classes.App}>
      <Background />
      <NavBar />
    </div>
  );
}

export default App;