import React, { Component } from 'react';

class AppointmentItem extends Component {
    render() {
        const {pet, owner, date, time, symptoms, id} = this.props.info;
            
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{pet}</h3>
                    <p className="card-text"><span>Nombre del Dueño: {owner}</span></p>
                    <p className="card-text"><span>Fecha:</span> {date}</p>
                    <p className="card-text"><span>Hora:</span> {time}</p>
                    <p className="card-text"><span>Síntomas:</span></p>
                    <p className="card-text">{symptoms}</p>
                </div>
            </div>
        );
    }
}

export default AppointmentItem;