import React from 'react';
import classes from './Person.module.css'
// import Radium from 'radium';
// import './Person.css';


const Person=(props)=>{
    
    
 return(
     <div className={classes.Person} >
        <p  onClick={props.click}>I Am {props.name} and I Am {props.age} Years Old </p>
        <p>{props.chidren} </p>
        <input type='text' onChange={props.changed} value={props.name} />
     </div>
 )
}
export default Person;