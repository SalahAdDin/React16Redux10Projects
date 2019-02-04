import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Expense from './Expense';

class List extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        <ul>
            {Object.keys(this.props.expenses).map(key => (
                <Expense key={key} expense={this.props.expenses[key]}/>
            ))}
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  expenses: PropTypes.object.isRequired,
}

export default List;