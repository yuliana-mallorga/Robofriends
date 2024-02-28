import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
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
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
      return !robots.length ? 
      <h1 className="f1 tc ma0 pa5 tracked">Loading...</h1> :
     (
        <div className="tc">
          <h1 className="f1 pa4 bg-black tracked">Welcome to RoboFriend</h1>
          <SearchBox searchChange={this.onSearchChage} />
          <Scroll>
            <ErrorBoundry fallback={<h1>Something went wrong</h1>}>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }


export default App;
