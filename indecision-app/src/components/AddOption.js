import React from 'react'

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  }

  handleAddOption = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))
    e.target.elements.option.value = ''
  }
  render() {
    return (
      <div>
        {this.state.error && (
          <div className="add-option-error">{this.state.error}</div>
        )}
        <form
          className="add-option"
          action="get"
          onSubmit={this.handleAddOption}
        >
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}
