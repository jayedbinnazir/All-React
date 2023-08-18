import React,{useState,useEffect} from 'react';
import axios from 'axios';

const HookData1 = () => {

    const [psots ,setPosts ]=useState([])

    const [id ,setId]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response)
            setPosts(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    return (
        <div>
           <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
           <div>{psots.title} </div>
        </div>
    ); 
};

export default HookData1;