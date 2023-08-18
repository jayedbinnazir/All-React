import React,{useState,useEffect} from 'react';
import axios from 'axios';

const HookData = () => {

    const [psots ,setPosts ]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            setPosts(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <ul>
                {
                    psots.map(post=>{
                        return <li key={post.id}>{post.title} </li>
                    })
                }
            </ul>
        </div>
    );
};

export default HookData;