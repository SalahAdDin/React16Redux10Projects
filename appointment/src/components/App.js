import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Appointment from './Appointment';
import AppointmentsList from './AppointmentsList';


class App extends Component {

  state = {
    appointments: []
  }

  // It's ready
  componentDidMount(){
    const appointmentsLS = localStorage.getItem('appointments');
    if (appointmentsLS) this.setState({
      appointments: JSON.parse(appointmentsLS)
    });
  }

  // It's executed before
  componentWillMount() {

  }

  //It's until componet's close
  componentWillUnmount(){

  }

  //It's at update
  componentDidUpdate(){
    localStorage.setItem(
      'appointments', 
      JSON.stringify(this.state.appointments)
    );
  }

  createAppointment = (newAppointment) => {
    const appointments = [...this.state.appointments, newAppointment];

    this.setState({
      appointments
    });
  }

  deleteAppointment = id =>{
    // get a state's copy
    const currentAppointments = [...this.state.appointments]

    // delete the item from the state
    // get all apppointments from the list that have a different id from the given id
    const appointments = currentAppointments.filter(appointment => appointment.id !== id);


    // Update the state
    this.setState({appointments});
  }

  render() {
    return (
      <div className="container">
        <Header title={'Administrador de Pacientes de Veterinaria'}/>
        <div className="row">
          <div className="col-md-6">
            <Appointment createAppointment={this.createAppointment}/>
          </div>
          <div className="col-md-6">
          <AppointmentsList 
            appointments={this.state.appointments} 
            deleteAppointment={this.deleteAppointment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
