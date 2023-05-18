import App from './App';
import { BrowserRouter, Routes, Route, Outlet, redirect } from "react-router-dom";
import Form from './form';
import useLocalStorageState from 'use-local-storage-state';
import { useState, useEffect } from 'react';

function AppContainer(){
    const [inputValue, setInputValue] = useState('');
    const [score, setScore] = useLocalStorageState('score', 0);
    const [correctAnswer, setCorrectAnswer] = useState('Amogus');
    const submitHandler = () => {
        if(inputValue === correctAnswer){
            setScore(score + 1);
        }else{
            setScore(0);
        }
    }

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />}></Route>
                <Route path='game' element={<Form fieldValue={inputValue} valueChanger={setInputValue} score = {score} submitter={submitHandler}/>}></Route>
            </Routes>
        </BrowserRouter>
        <Outlet />
        </>
    )
}

export default AppContainer;