//
// Destructuring Object
//

// const person = {
//   //   name: 'Leo Vo',
//   age: 33,
//   location: {
//     city: 'Ho Chi Minh',
//     temp: 32,
//   },
// }

// const { name = 'default', age } = person
// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//=======================================
//
// Destructuring Array
//

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75']

const [name, , mediumPrice] = item
console.log(`A medium ${name} costs ${mediumPrice}.`)
