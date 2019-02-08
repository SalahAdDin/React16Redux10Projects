import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Appointment from './Appointment';

class App extends Component {
  createAppointment = () => {

  }

  render() {
    return (
      <div className="container">
        <Header title={'Administrador de Pacientes de Veterinaria'}/>
        <div className="row">
          <div className="col-md-6">
            <Appointment createAppointment={this.createAppointment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
