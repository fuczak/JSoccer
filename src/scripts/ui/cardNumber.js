var $ = require('jquery');

var numbers = [
  $('#goalNumber'),
  $('#chanceNumber'),
  $('#passNumber'),
  $('#tackleNumber'),
  $('#otherNumber')
];

var cardNumber = {
  set: set,
  decrement: decrement
};

function set(array) {
  if (numbers.length === array.length) {
    numbers.forEach(function(e, i) {
      e.text(array[i]);
    });
  }
}

function decrement(type) {
  var selectedCard = numbers[type];
  selectedCard.text(selectedCard.text() - 1);
}

module.exports = cardNumber;
