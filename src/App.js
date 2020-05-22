import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const onSubmit = event => {
    event.preventDefault();
    axios.post("/", { name, age });
  };
  const onNameChange = event => setName(event.target.value);
  const onAgeChange = event => setAge(event.target.value);
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>
          name: <input onChange={onNameChange} id="nameInput" type="text" />
        </label>
        <label>
          age: <input onChange={onAgeChange} id="ageInput" type="number" />
        </label>
        <button>Send</button>
      </form>

      <h5>
        The name is {name} and the age is {age}
      </h5>
    </div>
  );
}
