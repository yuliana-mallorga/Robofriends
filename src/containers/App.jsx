import { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChage = (e) => {
    this.setState({ searchField: e.target.value });
    console.log("searchField", this.state.searchField);
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if(this.state.robots.length === 0){
        return <h1 className="f1 tc ma0 pa5 tracked">Loading...</h1>
    } else {
        return (
            <div className="tc">
              <h1 className="f1 pa4 bg-black tracked">Welcome to RoboFriend</h1>
              <SearchBox searchChange={this.onSearchChage} />
              <CardList robots={filteredRobots} />
            </div>
          );
    }
  }
}

export default App;
