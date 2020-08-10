let count = 0
const myId = 'myId'
const myClassName = 'myClassName'

const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.querySelector('#app') // get app root element

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id={myId} className={myClassName} onClick={addOne}>
        +1
      </button>
      &nbsp;
      <button onClick={minusOne}>-1</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot) // render template to root element
}

renderCounterApp()
