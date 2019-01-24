import React, {Component} from 'react';
import Products from './Products'
import Footer from './Footer';
import Header from './Header';

class App extends Component{

    render(){

        const products=[
            {name: 'Book', cost: 200},
            {name: 'Music CD', cost: 100},
            {name: 'Music Instrument', cost: 800},
            {name: 'Music Player', cost: 1500},
            {name: 'Album Special Ed.', cost: 500},
        ]    

        return(
            <div>
                <Header title="Mi nueva Tienda Virtual"/>
                <Products products={products}/>
                <Footer />
            </div>
        )
    }
}

export default App;