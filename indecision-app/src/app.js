console.log('app.js running.....')

const app = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: ['One', 'Two'],
}

// JSX - Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </div>
)

const user = {
  name: 'Long',
  age: 31,
  location: 'Ho Chi Minh',
}

const userName = 'Long Vo'
const userAge = 27
const userLocation = 'Ho Chi Minh'

const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>
  }
}

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.querySelector('#app') // get app root element

ReactDOM.render(template, appRoot) // render template to root element
