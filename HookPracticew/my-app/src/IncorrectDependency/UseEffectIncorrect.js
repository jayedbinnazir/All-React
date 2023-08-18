import React, { useEffect, useState } from 'react';

const UseEffectIncorrect = () => {

    let[count , setCount]=useState(0)
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{

       let interval=setInterval(tick ,1000)
       console.log('useEffect-updating the timer')
    },[])
    return (
        <div>
            HocTimer-{count}
        </div>
    );
};

export default UseEffectIncorrect;