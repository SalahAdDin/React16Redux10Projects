import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
    render() {
        return (
            <div>
                <h2>Listado de Productos</h2>
                <ul>
                    {Object.keys(this.props.products).map(key => (
                       <Product key={key} product={this.props.products[key]}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Products;