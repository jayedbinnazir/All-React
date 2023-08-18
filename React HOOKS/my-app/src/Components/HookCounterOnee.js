import React, { useState, useEffect } from 'react';



const HookCounterOnee = () => {

    const [count, setCount] = useState(0);
    const [name, setname] = useState(" ");

    useEffect(() => {
        console.log(`use effetct- Updating Document Title`)
        document.title = `You Clicked ${count} Times`

    },[count])

    return (
        <div>
             <input type='Text' value={name}  onChange={e=>setname(e.target.value)} />
            <button onClick={() => setCount(prev => prev + 1)}>
                Clicked{count}
            </button>

           
        </div>
    );
};

export default HookCounterOnee;