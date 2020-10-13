
import React, {Component} from 'react';
import {Robots} from '../components/Robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField }from '../action';
import {connect} from 'react-redux'


const mapStateToProps = state => {
return {
  //searchField : state.searchRobots.searchField 
  searchField: state.searchField
}
}

const mapDispatchToProps = (dispatch => {
return {onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}
})

class App extends Component {
  constructor(){
    super()
    this.state = {
    robots: [],
   // searchfield: ''    {due to redux}
    }
    console.log("constructor");
  }

  componentDidMount(){
    //console.log(this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=> Response.json()).then(user=> this.setState({robots:user}));
    console.log("componetdid mount - 2");
  }
  // removed due to mapDispatchToProps
  //onSearchChange = (event) => {
    //this.setState({searchfield : event.target.value})
    
    //console.log(filteredRobots);
  //} 

  render() {
    //const { robots, searchfield } = this.state; 
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    //console.log("render- 3");
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
     })
     //if(robots.length === 0) {
     return !robots.length ?<h1>loading</h1> :
  <div className = 'tc'>
    <h1>Robotic People</h1>
    <SearchBox searchChange = {onSearchChange}/>
    <Scroll>
      <ErrorBoundry>
    <CardList Robots={filteredRobots} />
    </ErrorBoundry>
    </Scroll >
  </div>
  
}
}
export default connect (mapStateToProps, mapDispatchToProps) (App);
