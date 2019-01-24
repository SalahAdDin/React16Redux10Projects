import React, { Component } from 'react'

class Product extends Component{
    render() {
        const {name, cost} = this.props.product;
        return(
            <li><strong>Name:</strong> {name}, <strong>Cost:</strong> {cost}</li>
        )
    }
}

export default Product;