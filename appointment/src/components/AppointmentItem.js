import React, { Component } from 'react';
import PropTypes from 'prop-types'


class AppointmentItem extends Component {
    
    deleteAppointment = () =>{
        this.props.deleteAppointment(this.props.info.id);
    }
    
    render() {
        const {pet, owner, date, time, symptoms} = this.props.info;
            
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{pet}</h3>
                    <p className="card-text"><span>Nombre del Dueño: {owner}</span></p>
                    <p className="card-text"><span>Fecha:</span> {date}</p>
                    <p className="card-text"><span>Hora:</span> {time}</p>
                    <p className="card-text"><span>Síntomas:</span></p>
                    <p className="card-text">{symptoms}</p>
                    <button onClick={this.deleteAppointment} className="btn btn-danger">Borrar</button>
                </div>
            </div>
        );
    }
}

AppointmentItem.propTypes = {
    info: PropTypes.shape({
            pet: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            symptoms: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    deleteAppointment: PropTypes.func.isRequired,
}

export default AppointmentItem;