import React, { Component } from 'react';
import logo from './logo.PNG';
import './App.css';

const textColor = {
    color: 'red'
};


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={textColor}>
             Welcome to The Roof Docs
          </p>
        </header>
      </div>
    );
  }
}

export default App;
