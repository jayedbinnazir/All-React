import React,{useState} from 'react';
import ClassMouse from './ClassMouse';
import HocMouseLog from './HocMouseLog';


const Display = () => {

    const[display ,setDisplay]=useState(false)

    const show=()=>{
        setDisplay(!display)
    }


    let Display=null;

    if(display){
        Display=(
            <div>
                <ClassMouse/>
                <HocMouseLog/>
            </div>
        )
    }

    
    return (
        <div>
            <button onClick={show}>Toggle</button>
            {Display}
        </div>
    );
};

export default Display;