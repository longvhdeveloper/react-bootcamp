console.log('app.js running.....')

const app = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: [],
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const onRemoveAll = () => {
  app.options = []
  renderApp()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  alert(app.options[randomNum])
}

const appRoot = document.querySelector('#app') // get app root element

const renderApp = () => {
  // JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do ?
      </button>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderApp()
