import './App.css';
import React, { Link } from "react-router-dom";

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
