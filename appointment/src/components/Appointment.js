import React, { Component } from 'react';
import uuid from 'uuid';

class Appointment extends Component {

    // refs
    namePetRef = React.createRef();
    nameOwnerRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();

    state = {

    }

    createNewAppointment = e => {
        e.preventDefault();

        const pet = this.namePetRef.current.value,
            owner = this.nameOwnerRef.current.value,
            date = this.dateRef.current.value,
            time = this.timeRef.current.value,
            symptoms = this.symptomsRef.current.value;

        const newAppointment={
           id: uuid(), pet, owner, date, time, symptoms
        }

        this.props.createAppointment(newAppointment);
    }
    
    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las Citas aquí:</h2>
                    <form onSubmit={this.createNewAppointment}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-9">
                                <input ref={this.namePetRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-9">
                                <input ref={this.nameOwnerRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.dateRef} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.timeRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-9">
                                <textarea ref={this.symptomsRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Appointment;