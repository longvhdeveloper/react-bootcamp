import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'
import { expect } from '@jest/globals'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
    />
  )
})

test('should render EditExpensePage correct', () => {
  expect(wrapper).toMatchSnapshot()
})

test('handle edit expense onSubmit', () => {
  const updated = {
    ...expenses[0],
    description: 'updated description',
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(updated)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, updated)
})

test('handle remove expense onClick', () => {
  wrapper.find('button').prop('onClick')()
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id })
})
