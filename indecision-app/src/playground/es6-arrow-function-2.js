// argument object - no longer bound with arrow function
const add = (a, b) => {
  //console.log(arguments)
  return a + b
}

// this keyword - no longer bound with arrow function
const user = {
  name: 'Jackie',
  cities: ['Ho Chi Minh', 'Ha Noi', 'Da Nang'],
  printPlaceLived() {
    this.cities.forEach((city) => {
      console.log(`${this.name} lived in ${city}`)
    })
  },
}
user.printPlaceLived()

const multiplier = {
  numbers: [1, 3, 5, 8],
  multiplyBy: 16,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number)
  },
}

console.log(multiplier.multiply())
