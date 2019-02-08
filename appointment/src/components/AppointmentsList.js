import React, { Component } from 'react';

class AppointmentsList extends Component {
    render() {
        const appointments = this.props.appointments;
        const message = Object.keys(appointments).length === 0 ? 'No hay citas' : 'Administra tus citas';
        return (
            <div className="card mt-5">
                <div className="class-body">
                    <h2 className="card-title text-center">{message}</h2>
                </div>
            </div>
        );
    }
}

export default AppointmentsList;