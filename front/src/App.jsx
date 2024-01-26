import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople();
    async function getPeople() {
      // Axis version
      // const res = await axios.get("http://localhost:3000/people");
      // i can destructure this by doing const {data} intead of const res
      // setPeople(res.data);

      // Fetch version - does the same thing:
      const response = await fetch("http://localhost:3000/people");
      const people = await response.json();
      setPeople(people);
    }
  });

  return (
    <div>
      <h1>MongoDb testing!!!</h1>
      {people.map((person) => {
        return (
          <p style={{ border: "solid 2px white" }} key={person._id}>
            {person.name}, age {person.age}
          </p>
        );
      })}
    </div>
  );
}

export default App;
