import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpeneseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  editExpense = (updated) => {
    const id = this.props.expense.id
    this.props.editExpense(id, updated)
    this.props.history.push('/')
  }

  removeExpense = () => {
    const id = this.props.expense.id
    this.props.removeExpense({ id })
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.editExpense} />
        <button onClick={this.removeExpense}>Remove</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, updated) => dispatch(editExpense(id, updated)),
    removeExpense: () => dispatch(removeExpense()),
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
