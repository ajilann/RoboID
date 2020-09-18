import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import Card from './Card';
import {Robots} from './Robots';
import CardList from './CardList';
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
   <CardList Robots={Robots} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
