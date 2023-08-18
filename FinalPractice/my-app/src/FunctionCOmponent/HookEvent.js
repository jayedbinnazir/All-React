import React, { useEffect ,useState } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';


const HookEvent = () => {

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    useEffect((e)=>{
        window.addEventListener("mousemove" , logMousePosition )
        console.log("HookEvent FireIng")
        return ()=>{
            console.log("Hook UnMounted Code")
            window.removeEventListener("mousemove",logMousePosition)
        }
    }
    
    ,[]);

    let logMousePosition=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <Box component={Paper} width="30%" mt={2} mx="auto" elevation={10} p={3} marginBottom={3} >
            <Typography variant="h4" >
                X-{x}
                Y-{y}
            </Typography>
        </Box>
    );
};

export default HookEvent;