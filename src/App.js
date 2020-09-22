
import React, {Component} from 'react';
import {Robots} from './Robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll'

class App extends Component {
  constructor(){
    super()
    this.state = {
    robots: [],
    searchfield: ''
    }
    console.log("constructor");
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=> Response.json()).then(user=> this.setState({robots:user}));
    console.log("componetdid mount - 2");
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
    
    //console.log(filteredRobots);
  } 

  render() {
    console.log("render- 3");
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
     })
     if(this.state.robots.length === 0) {
       return <h1>loading</h1> 
     }
     else {
  return (
  <div className = 'tc'>
    <h1>Robotic People</h1>
    <SearchBox searchChange = {this.onSearchChange}/>
    <Scroll>
    <CardList Robots={filteredRobots} />
    </Scroll >
  </div>
);
  }
}
}
export default App;
