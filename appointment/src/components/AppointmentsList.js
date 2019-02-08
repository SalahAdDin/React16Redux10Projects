import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
                            <AppointmentItem 
                                key={appointment} 
                                info={this.props.appointments[appointment]}
                                deleteAppointment={this.props.deleteAppointment}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

AppointmentsList.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
}

export default AppointmentsList;