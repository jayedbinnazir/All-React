import React from "react";
import Person from './Person/Person';

const persons=(props)=>props.persons.map((person, Index) => {
        return <Person
          name={person.name}
          age={person.age}
          click={() => props.clicked (Index)}
          changed={(event) => props.changed(event, person.id)}
          key={person.id} />
      })
export default persons;