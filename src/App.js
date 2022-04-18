import react, { Component } from "react";
import './App.css';
import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import { robots } from './robots';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
    // Constructor first
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    }).then(users => {
      this.setState({ robots: users })
    })
    // DidMount Third
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    // Render Second, Fourth
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
