import moment from 'moment'

// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createAtMoment = moment(expense.createAt)
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createAtMoment, 'date')
        : true

      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createAtMoment, 'date')
        : true
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
