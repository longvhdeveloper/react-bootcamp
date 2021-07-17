import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy,
  }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy,
  }
}

const setCount = ({ count = 1 } = {}) => {
  return {
    type: 'SET',
    count,
  }
}

const resetCount = () => {
  return {
    type: 'RESET',
  }
}

// Reducers
// 1. Reducers are pure function
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  //   console.log('store running...')

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      }
    case 'RESET':
      return {
        count: 0,
      }
    case 'SET':
      return {
        count: action.count,
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

// subcribe when object change
const unsubcribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions - than an object that gets sent to the store

// increment
store.dispatch(incrementCount({ incrementBy: 10 }))

// unsubcribe
// unsubcribe()

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))
