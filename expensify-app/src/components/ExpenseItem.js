import React from 'react'
import { Link } from 'react-router-dom'

export const ExpneseItem = ({ expense }) => {
  return (
    <tr>
      <td>{expense.description}</td>
      <td>{expense.notes}</td>
      <td>{expense.amount}</td>
      <td>{expense.createAt}</td>
      <td>
        <Link to={`/edit/${expense.id}`}>Edit</Link>
      </td>
    </tr>
  )
}

export default ExpneseItem
