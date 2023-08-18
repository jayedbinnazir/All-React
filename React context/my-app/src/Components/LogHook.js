import React, {useState, useEffect} from 'react';

const LogHook = () => {

    const[x, setX]=useState(0);
    const[y, setY]=useState(0);

    let logMousPosition=(e)=>{
        console.log('Mouse Evnt')
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect Activated')
        window.addEventListener('mousemove', logMousPosition)
        return ()=>{
            window.removeEventListener('mousemove', logMousPosition)
        }
    },[])

    return (
        <div>
            X:{x}
            Y:{y}
        </div>
    );
};

export default LogHook;