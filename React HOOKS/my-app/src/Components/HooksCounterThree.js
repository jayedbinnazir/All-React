import React ,{useState} from 'react';

const HooksCounterThree=()=>{

    const [name, setName]=useState({Fname:" " , Lname:" " });



    return(
        <div>
            <form>
                <input type={Text} value={name.Fname} onChange={event=>setName({...name, Fname:event.target.value})} />
                <input type={Text} value={name.Lname} onChange={event=>setName({...name, Lname:event.target.value})} />

                <h1>Your First Name is : {name.Fname} </h1>
                <h1>Your Last Name is : {name.Lname} </h1>

                <h1> {JSON.stringify(name)} </h1>
            </form>
        </div>
    )
}

export default HooksCounterThree;