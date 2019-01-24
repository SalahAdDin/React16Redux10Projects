import React, {Component} from 'react';
import Products from './Products'
import Footer from './Footer';
import Header from './Header';

class App extends Component{

    // With constructor
    // constructor(){
    //     super();
    //     this.state = {
    //         products : [
    //             {name: 'Book', cost: 200},
    //             {name: 'Music CD', cost: 100},
    //             {name: 'Music Instrument', cost: 800},
    //             {name: 'Music Player', cost: 1500},
    //             {name: 'Album Special Ed.', cost: 500},
    //         ]    
    //     }; 
    // }

    // Without constructor
    state = {
        products : [
            // {name: 'Book', cost: 200},
            // {name: 'Music CD', cost: 100},
            // {name: 'Music Instrument', cost: 800},
            // {name: 'Music Player', cost: 1500},
            // {name: 'Album Special Ed.', cost: 500},
        ]    
    }

    componentDidMount(){

        const products = [
            {name: 'Book', cost: 200},
            {name: 'Music CD', cost: 100},
            {name: 'Music Instrument', cost: 800},
            {name: 'Music Player', cost: 1500},
            {name: 'Album Special Ed.', cost: 500}
        ] 

        setTimeout( () => {
            this.setState({   
                products : products  
            });
        }, 3000);
    }

    render(){

        return(
            <div>
                <Header title="Mi nueva Tienda Virtual"/>
                <Products products={this.state.products}/>
                <Footer />
            </div>
        )
    }
}

export default App;