import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <p className='title'>
          The Metro Map Game!
        </p>
        <Link to='/game' id='start-button'>BEGIN</Link>
      </div>
    </div>
  );
}

export default App;
