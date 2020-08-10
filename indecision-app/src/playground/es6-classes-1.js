class Person {
  constructor(name = 'Your Name', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi ${this.name}`
  }
  getDescription() {
    const unit = this.age > 1 ? 'years' : 'year'
    return `${this.name} is ${this.age} ${unit} old.`
  }
}

const me = new Person('Long Vo', 31)
console.log(me.getGreeting())
console.log(me.getDescription())

const other = new Person()
console.log(other.getGreeting())
console.log(other.getDescription())
