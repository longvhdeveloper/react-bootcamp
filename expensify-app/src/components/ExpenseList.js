import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
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
        {props.expenses.length === 0 ? (
          <tr>
            <td colSpan="5">No expenses</td>
          </tr>
        ) : (
          props.expenses.map((expenseItem, index) => {
            return <ExpenseItem key={index} expense={expenseItem} />
          })
        )}
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
