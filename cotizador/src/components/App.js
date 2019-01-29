import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {

  cotizarSeguro = (data) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  }

  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de Seguro de Auto "/>
        <div className="contenedor-formulario">
          <Form cotizarSeguro={this.cotizarSeguro}/>
        </div>
      </div>
    );
  }
}

export default App;
