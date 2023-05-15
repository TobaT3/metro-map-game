import './App.css';

function Form({ fieldValue, valueChanger, submitter }) {
  return (
    <div className="Form">
      <div className='content'>
        <p>Guess the thing!</p>
        <img src = {require("./images/placeholder.png")}/>
        <form onSubmit={submitter}>
            <input type='text' value = {fieldValue} onChange={(e) => {valueChanger(e.target.value)}}></input>
            <input type = 'submit'></input>
        </form>
      </div>
    </div>
  );
}

export default Form;
