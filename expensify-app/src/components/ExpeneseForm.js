import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      notes: props.expense ? props.expense.notes : '',
      amount: props.expense ? props.expense.amount / 100 : '',
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      calendarFocused: false,
      error: '',
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const notes = e.target.value
    this.setState(() => ({ notes }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createAt) => {
    if (createAt) {
      this.setState(() => ({ createAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        notes: this.state.notes,
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.description}
            type="text"
            placeholder="Description"
            onChange={this.onDescriptionChange}
          />
          <input
            value={this.state.amount}
            type="text"
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Notes for expense"
          >
            {this.state.notes}
          </textarea>
          <button>Save</button>
        </form>
      </div>
    )
  }
}
