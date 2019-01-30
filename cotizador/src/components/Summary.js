import React, { Component } from 'react';
import { firstCapitalize } from '../helper';

class Summary extends Component {

    showResumen = () =>{
        const {marca, year, plan} = this.props.data;

        if(!marca || !year || !plan) return null;

        return(
            <div className="resumen">
                <h2>Resumen de Cotización</h2>
                <ul>
                    <li>Marca: {firstCapitalize(marca)}</li>
                    <li>Plan: {firstCapitalize(plan)}</li>
                    <li>Año del Auto: {year}</li>
                </ul>
            </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                {this.showResumen()}
            </React.Fragment>
        )
    }
}

export default Summary;