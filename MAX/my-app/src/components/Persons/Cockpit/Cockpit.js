import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    let assingedClasses = [];
    if (props.persons.length <= 2) {
      assingedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assingedClasses.push(classes.bold);
    }
    let btnClass=" ";
    if(props.showPersons){
        btnClass=classes.red;
    }
   


    return (

        <div className={classes.Cockpit}>
             <h1>Hello, I Am React App </h1>
          <p className={assingedClasses.join(" ")}>This Is Really Working</p>

          <button
            className={btnClass}
            onClick={props.clicked}>Toggle Person</button>
        </div>
    );
};

export default Cockpit;