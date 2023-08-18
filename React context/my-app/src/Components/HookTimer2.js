import React,{useState,useEffect} from 'react';

const HookTimer = () => {

    const[count, setCount]=useState(0)

    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }

    useEffect(()=>{
        console.log('useEffect Called')
        const interval=setInterval(tick , 1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            <p>{count}</p>
        </div>
    );
};

export default HookTimer;