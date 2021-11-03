import './App.css';
import Person from './Person/Person.js';
import React from 'react';
import Abc from './Person/Abc.js';
import Radium from "radium";
function App() {

  return (
    <div className="App">
     Hello World
     <Abc/>
    
    </div>
  );
}

export default Radium(App);
