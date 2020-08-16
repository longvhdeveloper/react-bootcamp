import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('save data!')
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!')
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => {
      if (prevState.options.includes(option)) {
        const idx = prevState.options.indexOf(option)
        prevState.options.splice(idx, 1)
        return {
          options: prevState.options,
        }
      }
    })
  }

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[random]
    alert(option)
  }

  handleAddOption = (option) => {
    option = option.trim()

    if (!option) {
      return 'Enter valid value to add item'
    }

    if (this.state.options.includes(option)) {
      return 'This option already exist'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }))
  }

  render() {
    const subTitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: [],
}

Header.defaultProps = {
  title: 'Indecision',
}
