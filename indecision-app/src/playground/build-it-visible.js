class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibity = this.toggleVisibity.bind(this)
    this.state = {
      hidden: true,
      btnText: 'Show details',
    }
  }

  toggleVisibity() {
    this.setState((prevState) => {
      return {
        hidden: !prevState.hidden,
        btnText: prevState.hidden ? 'Hidden details' : 'Show details',
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibity}>{this.state.btnText}</button>
        {!this.state.hidden ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : ''}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'))

//console.log('app is running....')
//
//let hidden = true
//const toggleVisibity = () => {
//  hidden = !hidden
//  render()
//}
//
//const render = () => {
//  const template = (
//    <div>
//      <h1>Visibility Toggle</h1>
//      <button onClick={toggleVisibity}> {hidden ? 'Show details' : 'Hidden details'}</button>
//      {!hidden ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : ''}
//    </div>
//  )
//  ReactDOM.render(template, appRoot)
//}
//
//const appRoot = document.querySelector('#app')
//render()
