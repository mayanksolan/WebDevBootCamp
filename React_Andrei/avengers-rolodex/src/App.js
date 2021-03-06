import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        // {
        //   name: "Iron Man",
        //   id: "a1"
        // },
        // {
        //   name: "Captain America",
        //   id: "a2"
        // },
        // {
        //   name: "Hulk",
        //   id: "a3"
        // }
      ]
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ avengers: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList name="IronMan">
          {this.state.avengers.map(avenger => (
            <h1 key={avenger.id}>{avenger.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
