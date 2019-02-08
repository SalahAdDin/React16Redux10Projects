import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem';

class AppointmentsList extends Component {
    render() {
        const appointments = this.props.appointments;
        const message = Object.keys(appointments).length === 0 ? 'No hay citas' : 'Administra tus citas';
        return (
            <div className="card mt-5">
                <div className="class-body">
                    <h2 className="card-title text-center">{message}</h2>
                    <ul className="lista-citas">
                        {Object.keys(this.props.appointments).map(appointment => (
                            <AppointmentItem key={appointment} info={this.props.appointments[appointment]}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AppointmentsList;