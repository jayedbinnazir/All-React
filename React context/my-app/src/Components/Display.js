import React,{useState} from 'react';
import LogHook from './LogHook';

const Display = () => {

    const[display,setDisplay]=useState(false)

    const showDisplay=()=>{
        setDisplay(!display)
    }
    let doesShow=null;
    if(display){
        doesShow=(
            <div>
                <LogHook/>
            </div>
        )
    }
    
    return (
        <div>
            <button onClick={showDisplay} >Toggle Display</button>
            {doesShow}
        </div>
    );
};

export default Display;