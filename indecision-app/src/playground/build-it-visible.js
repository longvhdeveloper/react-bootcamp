console.log('app is running....')

let hidden = true
const toggleVisibity = () => {
  hidden = !hidden
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibity}> {hidden ? 'Show details' : 'Hidden details'}</button>
      {!hidden ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> : ''}
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot = document.querySelector('#app')
render()
