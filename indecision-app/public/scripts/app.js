'use strict';

// argument object - no longer bound with arrow function
var add = function add(a, b) {
  //console.log(arguments)
  return a + b;
};

// this keyword - no longer bound with arrow function
var user = {
  name: 'Jackie',
  cities: ['Ho Chi Minh', 'Ha Noi', 'Da Nang'],
  printPlaceLived: function printPlaceLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log(_this.name + ' lived in ' + city);
    });
  }
};
user.printPlaceLived();

var multiplier = {
  numbers: [1, 3, 5, 8],
  multiplyBy: 16,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.multiplyBy * number;
    });
  }
};

console.log(multiplier.multiply());
