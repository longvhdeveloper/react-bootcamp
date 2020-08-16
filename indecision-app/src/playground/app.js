// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options,
    }
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

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(option) {
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

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[random]
    alert(option)
  }

  handleAddOption(option) {
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision',
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do ?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map((item, index) => (
        <Option
          value={item}
          text={item}
          key={index}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      Option: {props.text}{' '}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.text)
        }}
      >
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined,
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))
    e.target.elements.option.value = ''
  }
  render() {
    return (
      <div>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <form action="get" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
