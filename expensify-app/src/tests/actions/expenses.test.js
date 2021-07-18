import { expect } from '@jest/globals'
import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENESE',
    id: '123abc',
  })
})

test('should setup edit expense action', () => {
  const id = '123abc'
  const updates = {
    notes: 'Update note',
  }
  const action = editExpense(id, updates)
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates,
  })
})

test('should setup add expense action with provides value', () => {
  const expenseData = {
    description: 'Rent',
    notes: 'This was last months rent',
    amount: 1200,
    createAt: 1000,
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  })
})

test('should setup add expense action with default value', () => {
  const expenseData = {
    description: '',
    notes: '',
    amount: 0,
    createAt: 0,
  }
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  })
})
