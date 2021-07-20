import React from 'react'
import { shallow } from 'enzyme'
import ExpneseItem, { ExpenseItem } from '../../components/ExpenseItem'
import expenses from '../fixtures/expenses'
import { expect } from '@jest/globals'

test('should render ExpenseItem with expense', () => {
  const wrapper = shallow(<ExpneseItem expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
