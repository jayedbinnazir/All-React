import React, { useState } from 'react';
import ClassEvent from './ClassEvent';
import HookEvent from '../FunctionCOmponent/HookEvent';
import { Button } from '@material-ui/core';

const EventContainer = () => {

    const [ClassDisplay, setClassDisplay] = useState(true);
    const [HookDisplay, setHookDisplay] = useState(true);
    // console.log("DISPLAY",display)
    


    let toogleDispplay = () => {
        setClassDisplay(!ClassDisplay)
    }

    let toogleDispplayHook = () => {
        setHookDisplay(!HookDisplay)
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={toogleDispplay} style={{marginBottom:"2px"}} >Toggle Display Class Ebvent</Button>
            <Button onClick={toogleDispplayHook} variant="outlined" color="secondary" >Toggle Display Hook Ebvent</Button>
            {
                ClassDisplay && HookDisplay ? (
                    <>
                    <ClassEvent/>
                    <HookEvent/>
                    </>
                ): ClassDisplay ?<ClassEvent/> : HookDisplay ? <HookEvent/>:null            }
        </div>
    );
};

export default EventContainer;