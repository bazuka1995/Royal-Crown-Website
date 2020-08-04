import React from 'react';
import classes from './App.module.css';
import NavBar from '../components/NavBar/NavBar'
import Background from '../components/Background/Background';
import Button from "../components/Button/Button";
import HomeInfo from "../components/HomeInfo/HomeInfo"
import Scroll from 'react-scroll'

var Element = Scroll.Element;

function App() {
  return (
    <div>
      <Element name="background">
        <Background />
        <NavBar />
        <Button/>
      </Element>
      <Element name="info">
        <HomeInfo />
      </Element>
    </div>
  );
}

export default App;