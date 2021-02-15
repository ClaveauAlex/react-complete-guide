import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App(props) {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    // console.log("Was cliked !");
    // Don't do this ! this.state.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hey I'm a React App</h1>
      <p>This is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;

// state = {
//   persons: [
//     { name: "Max", age: 28 },
//     { name: "Manu", age: 29 },
//     { name: "Stephanie", age: 26 },
//   ],
// };

// switchNameHandler = () => {
//   // console.log("Was cliked !");
//   // Don't do this ! this.state.persons[0].name = "Maximilian";
//   this.setState({
//     persons: [
//       { name: "Maximilian", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 27 },
//     ],
//   });
// };
