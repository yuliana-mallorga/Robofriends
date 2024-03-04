import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App () {
  const [robots, setRobots] = useState( [] )
  const [searchField, setSearchField] = useState( '' )
  
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  },[]);


  const onSearchChage = (e) => {
    setSearchField( e.target.value );
  };

  
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
        <SearchBox searchChange={onSearchChage} />
        <Scroll>
          <ErrorBoundry fallback={<h1>Something went wrong</h1>}>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
          
  }


export default App;
