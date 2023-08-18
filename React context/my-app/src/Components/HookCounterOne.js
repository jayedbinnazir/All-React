import React, { useState,useEffect } from 'react';

const HookCounterOne = () => {
    let Count=0

    const [count, setCount]=useState(Count)

    const [name, setName]=useState(" ")

    useEffect(()=>{
        console.log("useEffect Running")
        document.title=`You Clicked ${count} Times `
    },[count])

    const Increment=()=>{
        setCount(prevValue=>prevValue+1)
    }
    return (
        <div>
            <button onClick={Increment} >Count :{count} </button>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </div>
    );
};

export default HookCounterOne;