import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de Seguro de Auto "/>
        <div className="contenedor-formulario">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
