import App from './App';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Form from './form';
import useLocalStorageState from 'use-local-storage-state';
import React, { useState, useEffect } from 'react';

function AppContainer(){
    const [inputValue, setInputValue] = useState('');
    const [score, setScore] = useLocalStorageState('score', { defaultValue: 0 });
    const [mapInfo, setMapInfo] = useLocalStorageState('mapInfo');
    const submitHandler = () => {
        if(inputValue.toLowerCase() === mapInfo.nameeng || inputValue.toLowerCase() === mapInfo.namesvk){
            setScore(score + 1);
        }else if(inputValue === 'reset'){
            localStorage.clear()
        }else{
            setScore(0);
        }
    }

    useEffect(() => {
        console.log('kako');
        fetch('http://localhost:5000/getmap').then(response => {
            response.json().then(data => {
                setMapInfo(data);
            })
        })
        return () => {
            setMapInfo(undefined);
            console.log(mapInfo)
        }
    },[score])
    return(
        <>
        <p>{mapInfo?.namesvk ?? "Not loaded yet"}</p>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />}></Route>
                <Route path='game' element={<Form fieldValue={inputValue} valueChanger={setInputValue} score = {score} submitter={submitHandler} image={mapInfo && "http://localhost:5000"+mapInfo.file}/>}></Route>
            </Routes>
        </BrowserRouter>
        <Outlet />
        </>
    )
}

export default AppContainer;