// set text filter
export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text,
  }
}

// sort by amount
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  }
}
// sort by date
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  }
}
// set start date
export const setStartDate = (startDate = undefined) => {
  return {
    type: 'SET_START_DATE',
    startDate,
  }
}
// set end date
export const setEndDate = (endDate = undefined) => {
  return {
    type: 'SET_END_DATE',
    endDate,
  }
}
