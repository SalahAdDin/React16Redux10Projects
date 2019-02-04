import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Budget extends Component {
  render() {
    return (
      <div className="alert alert-primary">
      Presupuesto: ${this.props.budget}
      </div>
    )
  }
}


Budget.propTypes = {
  budget: PropTypes.string.isRequired,
}