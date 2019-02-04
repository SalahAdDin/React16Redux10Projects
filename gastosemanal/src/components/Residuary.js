import React, { Component } from 'react'
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
