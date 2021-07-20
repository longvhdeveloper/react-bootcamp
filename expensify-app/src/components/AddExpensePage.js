import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpeneseForm'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  addExpense = (expense) => {
    this.props.addExpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={(expense) => {
            this.addExpense(expense)
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense)),
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
