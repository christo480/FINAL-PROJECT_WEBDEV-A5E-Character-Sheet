import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Sheet from './components/Sheet';


function App() {
  //Manage States of following variables
  const [Class, setClass] = useState("");
  const [heritage, setHeritage] = useState("");
  const [Culture, setCulture] = useState("");
  const [Background, setBackground] = useState("");
  const [Destiny, setDestiny] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Sheet heritage={heritage} changeHeritage={setHeritage} class={Class} changeClass={setClass} culture={Culture} changeCulture={setCulture} background={Background} changeBackground={setBackground}></Sheet>
      </header>
      
    </div>
  );
}

export default App;
