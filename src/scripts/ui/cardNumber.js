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
  modify: modify
};

function set(array) {
  if (numbers.length === array.length) {
    numbers.forEach(function(e, i) {
      e.text(array[i]);
    });
  }
}

function modify(type, action) {
  var selectedCard = numbers[type];
  selectedCard.closest('.remaining').addClass('remaining-selected');
  if (action === 'decrement') {
    selectedCard.text(+selectedCard.text() - 1);
  } else if (action === 'increment') {
    selectedCard.text(+selectedCard.text() + 1);
  }
  setTimeout(function() {
    selectedCard.closest('.remaining').removeClass('remaining-selected');
  }, 200);
}

module.exports = cardNumber;
