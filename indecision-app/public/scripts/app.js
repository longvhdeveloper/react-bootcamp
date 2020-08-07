'use strict';

console.log('app.js running.....');

var app = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: ['One', 'Two']

  // JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item 1'
    ),
    React.createElement(
      'li',
      null,
      'item 2'
    )
  )
);

var user = {
  name: 'Long',
  age: 31,
  location: 'Ho Chi Minh'
};

var userName = 'Long Vo';
var userAge = 27;
var userLocation = 'Ho Chi Minh';

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.querySelector('#app'); // get app root element

ReactDOM.render(template, appRoot); // render template to root element
