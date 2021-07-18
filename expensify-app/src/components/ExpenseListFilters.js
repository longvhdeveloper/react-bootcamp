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

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            // console.log(props)
            props.dispatch(setTextFilter(e.target.value))
          }}
        />
        <select
          onChange={(e) => {
            switch (e.target.value) {
              case 'amount':
                props.dispatch(sortByAmount())
                break

              default:
                props.dispatch(sortByDate())
                break
            }
          }}
        >
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

export default connect(mapStateToProps)(ExpenseListFilters)
