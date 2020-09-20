
import React, {Component} from 'react';
import {Robots} from './Robots';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends Component {
  constructor(){
    super()
    this.state = {
    robots: Robots,
    searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
    
    //console.log(filteredRobots);
  } 

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
     })
  return (
  <div className = 'tc'>
    <h1>Robotic People</h1>
    <SearchBox searchChange = {this.onSearchChange}/>
    <CardList Robots={filteredRobots} />

  </div>
);
}
}
export default App;
