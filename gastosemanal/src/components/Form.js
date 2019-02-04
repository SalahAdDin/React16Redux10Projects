import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    // refs
    nameExpense = React.createRef();
    quantityExpense = React.createRef();

    createExpense = (e) =>{

        // prevent default
        e.preventDefault();

        // create the object
        const expense = {
            nameExpense: this.nameExpense.current.value,
            quantityExpense: this.quantityExpense.current.value
        }
        
        // add and send by props
        this.props.addExpense(expense);

        // reset form
        e.currentTarget.reset();

    }

  render() {
    return (
      <form onSubmit={this.createExpense}>
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

Form.propTypes ={
  addExpense: PropTypes.func.isRequired,
}

export default Form;
