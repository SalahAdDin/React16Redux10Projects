import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {

  state = {
    budget: '',
    residuary: '',
    expenses: {}
  }

  addExpense = expense => {
    // copy current state
    const expenses = {...this.state.expenses};

    // add the expense to the object
    expenses[`expense-${Date.now()}`] = expense;
    
    // put in the state
    this.setState({expenses})
  }

  render() {
    return (
      <div className="App container">
      <Header title='Gasto Semanal'/>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form addExpense={this.addExpense}/>
            </div>
            <div className="one-half column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
