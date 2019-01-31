import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header title='Gasto Semanal'/>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form/>
            </div>
            <div className="one-half column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
