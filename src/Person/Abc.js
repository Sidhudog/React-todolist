import React, { Component } from "react";
import person from "./Person.js";
import Person from "./Person.js";
import Radium, { StyleRoot } from "radium";
class Abc extends Component {
  state = {
    persons: [
      { id: "1", name: "John", age: 34 },
      { id: "2", name: "Papa", age: 2 },
      { id: "3", name: "Poop", age: 4 },
    ],
    showPerson: true,
  };

  switchNameHandler = (newname) => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        { name: newname, age: 34 },
        { name: "Papa", age: 2 },
        { name: "Poop", age: 4 },
      ],
    });
  };

  namechangedhandler = (event, id) => {
    //index dhundho
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    //wo real person dhundho
    //real ki copy banao spread se
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    //fir copied person ka naam change karo
    const persons = [...this.state.persons];
    //persons ki list ka copy banao
    //persons ki list ki copy me changes karo
    persons[personIndex] = person;
    // Real person me copied wale ko merge kar do
    this.setState({ persons: persons });
  };

  togglehandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  deletepersonhandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    var togglestyle = {
      backgroundColor: "green",
      border: "2px",
      width: "50px",
      height: "50px",
      color: "white",
      borderRadius: "10px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let pople = null;

    if (this.state.showPerson) {
      togglestyle.backgroundColor = "rgb(213, 0, 0)";
      togglestyle[":hover"] = {
        backgroundColor: "rgb(255, 138, 128)",
        color: "black",
      };
      pople = (
        <div>
          <div className={classes.join(" ")}>
            There are {this.state.persons.length} items in list now
          </div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                className={classes.join(" ")}
                click={() => this.deletepersonhandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.namechangedhandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <StyleRoot>
        <div>
          <button style={togglestyle} onClick={this.togglehandler}>
            Hide
          </button>
          {pople}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(Abc);
