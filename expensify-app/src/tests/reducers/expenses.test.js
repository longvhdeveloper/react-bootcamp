import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENESE',
    id: expenses[1].id,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove expense by id not found', () => {
  const action = {
    type: 'REMOVE_EXPENESE',
    id: '-1',
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const expense = {
    description: 'Buy food',
    notes: '',
    amount: 24.67,
    createAt: moment().valueOf(),
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      notes: 'Expense updated',
    },
  }
  const state = expensesReducer(expenses, action)
  const updatedExpense = {
    ...expenses[0],
    notes: 'Expense updated',
  }
  expect(state).toEqual([updatedExpense, expenses[1], expenses[2]])
})

test('should not edit expense by id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      notes: 'Expense updated',
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
