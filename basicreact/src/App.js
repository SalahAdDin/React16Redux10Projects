import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const comment = `Inside of JSX {} execute JavaScript code`;
    const comment2 = `
      <React.Fragment> can be used as a parent, 
      it does not render any html tag; useful for flex-box.
    `;
    return (
      // RETURN must to return only one element: 
      //  multiple elements must be inside of a parent
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {comment}
        </header>
      </div>
    );
  }
}

export default App;
