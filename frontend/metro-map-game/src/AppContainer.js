import App from './App';
import Form from './form';
import { useState } from 'react';

function AppContainer(){
    const [inputValue, setInputValue] = useState('');
    return(
        //<App />
        //TODO: make it render app first, then switch to form
        <Form fieldValue={inputValue} valueChanger={setInputValue}/>
    )
}

export default AppContainer;