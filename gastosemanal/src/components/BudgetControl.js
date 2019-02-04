import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Budget from './Budget';
import Residuary from './Residuary';

export default class BudgetControl extends Component {
  render() {
    return (
        <React.Fragment>
            <Budget budget={this.props.budget}/>
            <Residuary residuary={this.props.residuary}/>
        </React.Fragment>
    )
  }
}


BudgetControl.propTypes = {
  budget: PropTypes.string.isRequired,
  residuary: PropTypes.string.isRequired,
}