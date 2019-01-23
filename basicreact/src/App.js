import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      React.createElement(
        'div',
        null,
        React.createElement(
          'input',
          {type: "text", value: "Value"},
        )
      )
    );
  }
}

export default App;
