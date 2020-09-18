import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './Card';
import {Robots} from './Robots'
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
   <Card id={Robots[0].id}name={Robots[0].name} username={Robots[0].username} email={Robots[0].email} />
   <Card id={Robots[1].id}name={Robots[1].name} username={Robots[1].username} email={Robots[1].email} />
   <Card id={Robots[2].id}name={Robots[2].name} username={Robots[2].username} email={Robots[2].email} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
