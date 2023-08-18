import React,{useEffect, useState} from 'react';

const HocMouseLog = () => {
    let[x,setx]=useState(0)
    let[y,sety]=useState(0)

    let logMousePosition=(e)=>{
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect-logMousePosition")

        window.addEventListener("mousemove",logMousePosition)
        return()=>{
            
            window.removeEventListener("mousemove",logMousePosition)
            console.log("useEffect-Unmounted EventListener")
        }
    },[])
    return (
        <div>
            X-{x}
            Y-{y}
        </div>
    );
};

export default HocMouseLog;