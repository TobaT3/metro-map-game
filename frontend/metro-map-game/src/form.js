import './App.css';

function Form({ inputValue }) {
  return (
    <div className="Form">
      <div className='content'>
        <p>Guess the thing!</p>
        <img src = {require("./images/placeholder.png")}/>
      </div>
    </div>
  );
}

export default Form;
