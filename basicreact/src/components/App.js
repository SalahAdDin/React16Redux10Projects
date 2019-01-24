import React, {Component} from 'react';
import Products from './Products'
import Footer from './Footer';
import Header from './Header';

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <Products />
                <Footer />
            </div>
        )
    }
}

export default App;