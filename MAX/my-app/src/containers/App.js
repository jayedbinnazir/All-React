import React, { Component } from 'react';
import './App.css';
import classes from'./App.module.css';
import Persons from '../components/Persons/Persons.js';
// import Radium ,{StyleRoot} from 'radium';
import Cockpit from '../components/Persons/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "sha", name: 'Max', age: '27' },
      { id: "sab", name: 'Manu', age: '28' },
      { id: "kap", name: 'Stephanie', age: '26' }
    ],
    otherState: "some other value",
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '27' },
        { name: 'Manu', age: '28' },
        { name: 'Stephanie', age: '29' }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons=this.state.person.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({ persons: persons });


  }
  tooglePersonHandler = () => {
    let show = this.state.showPersons;
    this.setState({ showPersons: !show })
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: '8px',
    //   cursor: "pointer",
      

    // }
    // let classes=["red" , "bold"].join(" ");
    
   
    

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}  />
         
        </div>
      )
      // style.backgroundColor = 'red';
     
    }
    return (
      
        <div className={classes.App}>
         
          <Cockpit showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.tooglePersonHandler} />
          {persons}


        </div>
      
    )

  }
}

export default App;

