import React,{useState,useEffect} from 'react';

const HookTimer = () => {

    const[count, setCount]=useState(0)

    const tick=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log('useEffect Called')
        const interval=setInterval(tick , 1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])
    return (
        <div>
            <p>{count}</p>
        </div>
    );
};

export default HookTimer;