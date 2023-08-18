import React,{useState,useEffect} from 'react';
import axios from 'axios';

const HookData1 = () => {

    const [psots ,setPosts ]=useState([])

    const [id ,setId]=useState(1)

    const [idFromButtonClick ,setIdFromButtonClick]=useState(1)

    const HandleClick=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response=>{
            console.log(response)
            setPosts(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
    return (
        <div>
           <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
           <button onClick={HandleClick} >Fetch Posts</button>
           <div>{psots.title} </div>
        </div>
    ); 
};

export default HookData1;