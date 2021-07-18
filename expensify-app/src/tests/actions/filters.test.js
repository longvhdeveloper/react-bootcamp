import { expect } from '@jest/globals'
import moment from 'moment'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters'

test('should setup set start date filter', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  })
})

test('should setup set end date filter', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  })
})

test('should setup text filter with default value', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  })
})

test('should setup text filter with value', () => {
  const action = setTextFilter('bill')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill',
  })
})

test('should setup sort amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})

test('should setup sort date', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
})
