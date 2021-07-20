import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import { expect } from '@jest/globals'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change ExpenseListFilters correctly', () => {
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: altFilters.text },
    })
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text)
})

test('should handle sort by amount ExpenseListFilters correctly', () => {
  wrapper
    .find('select')
    .at(0)
    .simulate('change', {
      target: { value: altFilters.sortBy },
    })
  expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should handle sort by date ExpenseListFilters correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  })
  wrapper
    .find('select')
    .at(0)
    .simulate('change', {
      target: { value: filters.sortBy },
    })
  expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should handle date changes ExpenseListFilters correctly', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: altFilters.startDate,
    endDate: altFilters.endDate,
  })
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test('should handle date focus change ExpenseListFilters correctly', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate')
  expect(wrapper.state('calendarFocused')).toBe('endDate')
})
