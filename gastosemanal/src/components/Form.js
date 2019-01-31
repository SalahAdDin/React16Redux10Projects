import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form>
          <h2>Agrega tus gastos aquí</h2>
          <div className="campos">
            <label>Gasto</label>
            <input className="u-full-width" type="text" placeholder="Ej. Transporte"/>
          </div>
          <div className="campos">
            <label>Cantidad</label>
            <input className="u-full-width" type="text" placeholder="Ej. 300"/>
          </div>
          <input className="button-primary u-full-width" type="submit" value="Agregar" />
      </form>
    )
  }
}

export default Form;
