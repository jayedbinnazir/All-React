import React, { useEffect, useState } from 'react';
import {Box, Button} from "@material-ui/core"

const HookCounter = () => {
    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("HookCounter Update")
        document.title=`Clicked-${count} Times  `
    })

    let handleClick=()=>{

        setCount(prev=>prev+1);
        
    }

    return (
        <Box>
            <Button variant="contained" color="secondary" onClick={handleClick} > <a href="/" > {count} </a> </Button>
        </Box>
    );
};

export default HookCounter;