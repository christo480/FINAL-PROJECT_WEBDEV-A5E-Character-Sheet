import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Sheet from './components/Sheet';
import compat from './assets/powered_by.png'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>FINAL WEBDEV PROJECT: A5E Character Sheet</h1>
        <p>
          <code>by Christian A. Gillies</code> 
        </p>
        
        <a
          className="App-link"
          href="https://www.levelup5e.com/"
          target="_blank"
          rel="noopener noreferrer"
        ><img src={compat} className="App-logo" alt="logo" />
        </a>
        <Sheet></Sheet>
      </header>
      
    </div>
  );
}

export default App;
