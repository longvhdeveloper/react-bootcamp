import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import visibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// store.subscribe(() => {
//   const state = store.getState()
//   const expenses = visibleExpenses(state.expenses, state.filters)
//   console.log(expenses)
// })

store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 100,
    createAt: 1000,
  })
)

store.dispatch(
  addExpense({
    description: 'Gas Bill',
    amount: 300,
    createAt: 200,
  })
)

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 500,
    createAt: 100,
  })
)

// store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
