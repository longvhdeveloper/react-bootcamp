import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const state = filtersReducer(
    {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
    },
    { type: 'SORT_BY_DATE' }
  )
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'bill',
  })

  expect(state.text).toBe('bill')
})

test('should set start date', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment(0),
  })

  expect(state.startDate.valueOf()).toBe(moment(0).valueOf())
})

test('should set end date', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment(0),
  })

  expect(state.endDate.valueOf()).toBe(moment(0).valueOf())
})
