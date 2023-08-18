import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { id: 'sds', name: "Max", age: 28 },
      { id: 'sasd', name: "Manu", age: 29 },
      { id: 'sdh', name: "Stephanie", age: 27 }
    ],
    otherState: "Some Other Value",
    showPersons: false

  }

  switchNameHandler = (newName) => {
    //  DON'T DO THIS :this.persons[0].name="Maximillian",
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    })

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;


    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: '8px',
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    let persons = null;
    if (this.state.showPersons) {

      persons = (

        <div>
          {
            this.state.persons.map((person, Index) => {
              return <Person
                click={() => this.deletePersonHandler(Index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }

        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi,I am React App</h1>
          <p className={classes.join(' ')}>THis Is Really Working</p>

          <button
            style={style}
            onClick={this.togglePersonsHandler}>Change Name</button>
          {persons}
        </div>
      </StyleRoot>

    )
  }
}

export default Radium(App);