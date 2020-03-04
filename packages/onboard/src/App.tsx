import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Checkbox, Dropdown } from '@sapiens/ui-core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {Button(1,10)} {Checkbox(10,1)}
        </a>
        <Dropdown message="FUCK OFF" />
      </header>
    </div>
  );
}

export default App;
