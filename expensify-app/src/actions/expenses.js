import uuid from 'uuid'

// add expense
export const addExpense = ({
  description = '',
  notes = '',
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createAt,
  },
})

// remove expense
export const removeExpense = ({ id = '' } = {}) => {
  return {
    type: 'REMOVE_EXPENESE',
    id,
  }
}

// edit expense
export const editExpense = (id, updates = {}) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates,
  }
}
