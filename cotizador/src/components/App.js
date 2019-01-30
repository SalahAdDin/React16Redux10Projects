import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import { getYearDifference, calculateMarca, getPlan } from '../helper';
import Summary from './Summary';
import Result from './Result';

class App extends Component {

  state = {
    result: '',
    data: {}
  }

  cotizarSeguro = (data) => {
    const {marca, plan, year} = data;

    // base seguro = 2000
    let result = 2000;

    // get years difference
    const difference = getYearDifference(year);
    
    // for each year deduct 3%
    result -= ((difference * 3) * result) / 100;

    // increase the value by model
    result = calculateMarca(marca) * result;

    // increase the value by plan
    result = parseFloat(result * getPlan(plan)).toFixed(2);

    // create review object

    const dataAuto = {
      marca: marca,
      plan: plan,
      year: year,
    }

    this.setState({
      result: result,
      data: dataAuto
    })  
  }
  

  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de Seguro de Auto "/>
        <div className="contenedor-formulario">
          <Form cotizarSeguro={this.cotizarSeguro} />
          <Summary data={this.state.data}/>
          <Result result={this.state.result}/>
        </div>
      </div>
    );
  }
}

export default App;
