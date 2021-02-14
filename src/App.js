import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hey I'm a React App</h1>
      <p>This is working</p>
      <Person name="Max" age="28"/>
      <Person name="Manu" age="29">My hobbies: Racing</Person>
      <Person name="Stephanie" age="26"/>
    </div>
  );
}

export default App;
