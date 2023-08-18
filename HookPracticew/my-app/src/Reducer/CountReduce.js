import React,{useState,useReducer} from 'react';

let initialState=0;

let reduce=(count, action )=>{
    switch(action){
        case 'increment' :
            return count+1
        case 'decrement' :
            return count-1
        case "reset":
            return initialState
        case "incrementFive":
            return count+5
        default:
            return count;
    }
}

const CountReduce = () => {
    let[newState, dispatch ]=useReducer(reduce,initialState)
    return (
        <div>
            Count-{newState}
            <button onClick={()=>dispatch("increment")} >increment</button>
            <button onClick={()=>dispatch("decrement")} >decrement</button>
            <button onClick={()=>dispatch("reset")} >reset</button>
            <button onClick={()=>dispatch("incrementFive")} >incrementFive</button>
            
        </div>
    );
};

export default CountReduce;