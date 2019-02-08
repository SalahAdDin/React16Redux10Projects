import React, { Component } from 'react';

class AppointmentItem extends Component {
    render() {
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0"></h3>
                    <p className="card-text"><span>Nombre del Dueño:</span></p>
                    <p className="card-text"><span>Fecha:</span></p>
                    <p className="card-text"><span>Hora:</span></p>
                    <p className="card-text"><span>Síntomas:</span></p>
                    <p className="card-text"></p>
                </div>
            </div>
        );
    }
}

export default AppointmentItem;