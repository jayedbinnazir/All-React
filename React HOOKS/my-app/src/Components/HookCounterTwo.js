import React,{useState} from 'react';

const HookCounterTwo = () => {

    let initialCount=0;
    let [count , setCount ]=useState(initialCount)

    const FiveIncrement=()=>{

        for(let i=0 ; i<5 ;i++){

           
           setCount(prevValue=>prevValue+1);
           
        }


    }
    return (
        <div>
            Count:{count}
            <button onClick={()=>setCount(initialCount)} >Reset</button>
            <button onClick={()=>setCount(prevValue=>prevValue+1)} >Increment</button>
            <button onClick={()=>setCount(prevValue=>prevValue-1)} >Decrement</button>
            <button onClick={()=>setCount(FiveIncrement)} >Increment 5</button>
        </div>
    );
};

export default HookCounterTwo;