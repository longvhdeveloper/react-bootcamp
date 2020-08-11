class Person {
  constructor(name = 'Your Name', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi. I am ${this.name}`
  }
  getDescription() {
    const unit = this.age > 1 ? 'years' : 'year'
    return `${this.name} is ${this.age} ${unit} old.`
  }
}

class Student extends Person {
  constructor(name = 'Your Name', age = 0, major = '') {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    return this.hasMajor() ? `${super.getDescription()} Their major is ${this.major}` : super.getDescription()
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation = '') {
    super(name, age)
    this.homeLocation = homeLocation
  }

  hasHomeLocation() {
    return !!this.homeLocation
  }

  getGreeting() {
    return this.hasHomeLocation()
      ? `${super.getGreeting()}. I'm visiting from ${this.homeLocation}`
      : super.getGreeting()
  }
}

const me = new Student('Long Vo', 31, 'Computer Science')
console.log(me.getGreeting())
console.log(me.getDescription())

console.log(me.hasMajor())

const other = new Student()
console.log(other.getGreeting())
console.log(other.getDescription())
console.log(other.hasMajor())

const travller1 = new Traveller('Long', 31, 'Ho Chi Minh City')
console.log(travller1.getGreeting())

const travller2 = new Traveller('Ann', 28)
console.log(travller2.getGreeting())
