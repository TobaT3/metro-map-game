import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <p className='title'>
          Sup dude
        </p>
        <Link to='/game'>BEGIN</Link>
      </div>
    </div>
  );
}

export default App;