// expense reducer
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
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
        } else {
          return expense
        }
      })
    default:
      return state
  }
}
