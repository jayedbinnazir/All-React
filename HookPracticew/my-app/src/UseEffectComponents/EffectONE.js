import React,{useEffect, useState} from 'react';

const EffectONE = () => {
    let[count,setCount]=useState(0)

    let [name ,setName]=useState(" ")

    useEffect(()=>{
        console.log('useEffect - Updating Document Title')
       document.title=`You Clicked ${count} Times`
    },[count])
    return (
        <div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)} >Count{count}</button>

            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
    );
};

export default EffectONE;