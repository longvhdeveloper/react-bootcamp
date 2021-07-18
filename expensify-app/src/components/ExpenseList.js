import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Notes</th>
          <th>Amount</th>
          <th>Create at</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map((expenseItem) => {
          return <ExpenseItem expense={expenseItem} />
        })}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)
