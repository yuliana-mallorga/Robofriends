import { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import { robots } from "../robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChage = (e)=>{
    this.setState({ searchField: e.target.value})
    console.log('searchField', this.state.searchField);
    
   }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1 pa4 bg-near-black">Welcome to RoboFriend</h1>
        <SearchBox searchChange= {this.onSearchChage}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
