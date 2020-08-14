class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: props.count,
    }
  }

  componentDidMount() {
    console.log('loaded data')
    try {
      const json = localStorage.getItem('count')
      const count = parseInt(json, 10) || 0
      this.setState(() => ({ count }))
    } catch (e) {
      // nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
      console.log('saved data')
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      }
    })

    //this.setstate((prevstate) => {
    //  return {
    //    count: prevstate.count + 1,
    //  }
    //})

    // Async when setState
    //this.setState({
    //  count: 0,
    //})

    //this.setState({
    //  count: this.state.count + 1,
    //})
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button> &nbsp;
        <button onClick={this.handleMinusOne}>-1</button> &nbsp;
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0,
}

ReactDOM.render(<Counter />, document.querySelector('#app'))

// let count = 0
// const myId = 'myId'
// const myClassName = 'myClassName'

// const addOne = () => {
//   count++
//   renderCounterApp()
// }

// const minusOne = () => {
//   count--
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const appRoot = document.querySelector('#app') // get app root element

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id={myId} className={myClassName} onClick={addOne}>
//         +1
//       </button>
//       &nbsp;
//       <button onClick={minusOne}>-1</button>
//       &nbsp;
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot) // render template to root element
// }

// renderCounterApp()
