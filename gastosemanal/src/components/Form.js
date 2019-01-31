import React, { Component } from 'react'

class Form extends Component {

    // refs
    nameExpense = React.createRef();
    quantityExpense = React.createRef();

    addExpenses = (e) =>{

        // prevent default
        e.preventDefaul();

        const expense = {
            nameExpense: this.nameExpense.current.value,
            quantityExpense: this.quantityExpense.current.value
        }

        // reset form
        e.currentTarget.reset();

    }

  render() {
    return (
      <form onSubmit={this.addExpenses}>
          <h2>Agrega tus gastos aquí</h2>
          <div className="campos">
            <label>Gasto</label>
            <input ref={this.nameExpense} className="u-full-width" type="text" placeholder="Ej. Transporte"/>
          </div>
          <div className="campos">
            <label>Cantidad</label>
            <input ref={this.quantityExpense} className="u-full-width" type="text" placeholder="Ej. 300"/>
          </div>
          <input className="button-primary u-full-width" type="submit" value="Agregar" />
      </form>
    )
  }
}

export default Form;
