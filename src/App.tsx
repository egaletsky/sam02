import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Counter countMax={5}/>
          <Counter countMax={10}/>
          <Counter countMax={15}/>
      </header>
    </div>
  );
}

export default App;
