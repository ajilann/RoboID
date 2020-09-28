
import React, {Component} from 'react';
import {Robots} from '../components/Robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

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
    const { robots, searchfield } = this.state; 
    //console.log("render- 3");
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
     })
     //if(robots.length === 0) {
     return !robots.length ?<h1>loading</h1> :
  <div className = 'tc'>
    <h1>Robotic People</h1>
    <SearchBox searchChange = {this.onSearchChange}/>
    <Scroll>
      <ErrorBoundry>
    <CardList Robots={filteredRobots} />
    </ErrorBoundry>
    </Scroll >
  </div>
  
}
}
export default App;
