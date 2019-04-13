import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="myApp_title" type="text">
          Students Memory
        </div>
        <Main />
      </div>
    );
  }
}
