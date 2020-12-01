import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './App.css';

// constructing the App component and declaring states in contructor
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  // as soon as APP load the component will fetch data, then transform the response in json, and set the state with new datas.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    console.log(this.state.robots);
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <h1 className="f1">Robofriendz</h1>
          <hr></hr>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;