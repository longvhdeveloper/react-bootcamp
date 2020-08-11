class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App'
    const subTitle = 'Put your life in the hands of a computer'
    const options = ['Item one', 'Item two', 'Item three']

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do ?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.options.map((item, index) => (
            <Option value={item} text={item} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <div>Option: {this.props.text}</div>
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add Option Component here</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
