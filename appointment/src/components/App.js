import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Appointment from './Appointment';

class App extends Component {

  state = {
    appointments: []
  }

  createAppointment = (newAppointment) => {
    const appointments = [...this.state.appointments, newAppointment];

    this.setState({
      appointments
    });
    console.log('====================================');
    console.log(appointments);
    console.log('====================================');
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
