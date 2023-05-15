import App from './App';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Form from './form';
import { useState } from 'react';

function AppContainer(){
    const [inputValue, setInputValue] = useState('');
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('Amogus');


    
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />}></Route>
                <Route path='game' element={<Form fieldValue={inputValue} valueChanger={setInputValue} score = {score}/>}></Route>
            </Routes>
        </BrowserRouter>
        <Outlet />
        </>
    )
}

export default AppContainer;