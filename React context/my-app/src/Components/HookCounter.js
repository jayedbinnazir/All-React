import React, {useState} from 'react';

const HookCounter=()=>{

    let initialState=0
    const [count,setCount]=useState(initialState);

    // for(i=0; i<=5 ; i++){
    //     setCount(prevValue=>prevValue+5)
    // }

    return(
        <div>
            <div>Count:{count}</div>
            <button onClick={()=>setCount(prevValue=>prevValue+1)} >Increment</button>
            <button onClick={()=>setCount(prevValue=>prevValue-1)} >Deccrement</button>
            <button onClick={()=>setCount(initialState)} >Reset</button>
            <button onClick={()=>setCount(prevValue=>prevValue+5)} >Increment5</button>
        </div>
    )
}

export default HookCounter;