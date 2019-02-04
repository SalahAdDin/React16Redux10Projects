import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reviewBudget } from '../helper';

export default class Residuary extends Component {
  render() {
    const budget = this.props.budget;
    const residuary = this.props.residuary;

    return (
        <div className={reviewBudget(budget, residuary)}>
            Restante: ${residuary}
        </div>
    )
  }
}

Residuary.propTypes = {
  budget: PropTypes.string.isRequired,
  residuary: PropTypes.string.isRequired
}