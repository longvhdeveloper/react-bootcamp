import React from 'react'
import { connect } from 'react-redux'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters'

import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  onTextChange = (e) => {
    // console.log(props)
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    switch (e.target.value) {
      case 'amount':
        this.props.sortByAmount()
        break

      default:
        this.props.sortByDate()
        break
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select onChange={this.onSortChange}>
          <option selected={this.props.filters.sortBy === 'date'} value="date">
            Date
          </option>
          <option
            selected={this.props.filters.sortBy === 'amount'}
            value="amount"
          >
            Amount
          </option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={false}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
