import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// add expense
const addExpense = ({
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
const removeExpense = ({ id = '' } = {}) => {
  return {
    type: 'REMOVE_EXPENESE',
    id,
  }
}

// edit expense
const editExpense = (id, updates = {}) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates,
  }
}

// set text filter
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text,
  }
}

// sort by amount
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  }
}
// sort by date
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  }
}
// set start date
const setStartDate = (startDate = undefined) => {
  return {
    type: 'SET_START_DATE',
    startDate,
  }
}
// set end date
const setEndDate = (endDate = undefined) => {
  return {
    type: 'SET_END_DATE',
    endDate,
  }
}

// expense reducer
const expensesReducerDefaultState = []
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENESE':
      return state.filter((expense) => expense.id != action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          }
        }
      })
    default:
      return state
  }
}

// filter reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state
  }
}

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || expense.createAt <= endDate
      const textMacth = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMacth
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createAt < b.createAt ? 1 : -1
      }

      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createAt: 1000 })
)
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffe', amount: 300, createAt: -1000 })
)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(9999))
// store.dispatch(setEndDate())

const demoState = {
  expenses: [
    {
      id: 'dadfdfa1dfd',
      description: 'January Rent',
      notes: 'This was the final payment for that address',
      amount: 545.0,
      createAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
}

const user = {
  name: 'Jean',
  age: 24,
}

console.log({
  ...user,
  location: 'Ho Chi Minh',
  age: 33,
})
