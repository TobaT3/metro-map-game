import './App.css';
import React from 'react';

function Form({ fieldValue, valueChanger, submitter, score, image }) {
  return (
    <div className="Form">
      <div className='content'>
        <p>Guess the City!</p>
        <p id='score-text'>{'Score: '+score}</p>
        <img src = {image ? image : require("./images/placeholder.png")}/>
        <form onSubmit={submitter}>
            <input type='text' value = {fieldValue} onChange={(e) => {valueChanger(e.target.value)}}></input>
            <input type = 'submit'></input>
        </form>
      </div>
    </div>
  );
}

export default Form;
