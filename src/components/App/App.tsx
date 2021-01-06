import React from 'react';
import './App.css';
import Timer from '../Timer/Timer';

const App=()=>{
    return(
        <>
        <h1 style={{textAlign:'center'}}>React Timer By Syed Aashir Majeed</h1>
        <div className="container">
            <Timer/>
        </div>
        </>
    )
}

export default App;