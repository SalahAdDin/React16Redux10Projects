import React, { Component } from 'react'
import Budget from './Budget';
import Residuary from './Residuary';

export default class BudgetControl extends Component {
  render() {
    return (
        <React.Fragment>
            <Budget />
            <Residuary />
        </React.Fragment>
    )
  }
}
