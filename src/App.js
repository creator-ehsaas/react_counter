import React, {useState} from 'react';
import "./style.css";
const App=()=>{
    
    let [score, setScore] = useState(0) //setting default value for set with useState()
    return(
        <div>
            <h1>Hey let's have some counting practice!</h1>
            <div className="box"><h2>Counter: {score}</h2></div>
            <button className="myButton" onClick={()=>(score >= 25)? "" : setScore(score+1)}>Increment</button> 
            <button className="myButton" onClick={()=>{(score > 0)? setScore(score-1) : setScore(0)}}>Decrement</button>
            <button className="myButton" onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
}

export default App