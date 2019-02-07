import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title={'Administrador de Pacientes de Veterinaria'}/>
      </div>
    );
  }
}

export default App;
