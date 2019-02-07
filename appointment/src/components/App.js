import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Appointment from './appointment';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title={'Administrador de Pacientes de Veterinaria'}/>
        <div className="row">
          <div className="col-md-6">
            <Appointment />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
