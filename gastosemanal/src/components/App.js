import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import List from './List';
import { validateBudget } from '../helper';
import BudgetControl from './BudgetControl';

class App extends Component {

  state = {
    budget: '',
    residuary: '',
    expenses: {}
  }

  componentDidMount(){
    this.getBudget();
  }

  getBudget = () => {
    let budget = prompt('Enter your initial budget:');

    let result = validateBudget(budget);

    if (result) this.setState({budget, residuary: budget});
    else this.getBudget();
  }

  addExpense = expense => {
    // copy current state
    const expenses = {...this.state.expenses};

    // add the expense to the object
    expenses[`expense-${Date.now()}`] = expense;
    
    // subtract
    this.subtractBudget(expense.quantityExpense);

    // put in the state
    this.setState({expenses})
  }

  // subtrac the expense from the budget
  subtractBudget = quantity => {
    // read the expense
    let subtract = Number(quantity);

    // copy the state
    let residuary = this.state.residuary;

    // subtract
    residuary -= subtract;

    residuary = String(residuary);

    // set a new state
    this.setState({residuary})
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
            <div className="one-half column">
              <List expenses={this.state.expenses}/>
              <BudgetControl budget={this.state.budget} residuary={this.state.residuary}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
