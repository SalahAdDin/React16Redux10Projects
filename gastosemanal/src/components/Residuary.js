import React, { Component } from 'react'

export default class Residuary extends Component {
  render() {
    return (
        <div className="alert alert-success">
            Restante: ${this.props.residuary}
        </div>
    )
  }
}
