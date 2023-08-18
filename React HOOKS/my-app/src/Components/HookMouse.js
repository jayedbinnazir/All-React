import React,{useState,useEffect} from 'react';

const HookMouse = () => {

    const [x ,setx]=useState(0)
    const [y ,sety]=useState(0)

    const logMousePosition=(e)=>{
        console.log("Mouse Event")

        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        console.log("useeffect called")

        window.addEventListener("mousemove" , logMousePosition)
    },[])

    return (
        <div>
            X-{x} Y-{y}
        </div>
    );
};

export default HookMouse;