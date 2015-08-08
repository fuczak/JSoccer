var helpers = require('./helpers');
var uiCardNumber = require('./ui/cardNumber');
var shuffle = require('lodash/collection/shuffle');

var _possibleOutcomes = ['Goal', 'Chance', 'Pass', 'Tackle', 'Injury', 'Offside', 'Penalty', 'Red Card']; // Plus 'Whistle'
var _outcomeArray = [];

var outcomes = {
  generate: generate,
  clear: clear,
  getOutcome: getOutcome,
};

function generate() {
  // First, add between one and three Whistle events
  var whistleEvents = helpers.random(1, 3);
  var outcomesForUi = [0, 0, 0, 0, 0];
  for (var i = 0; i < whistleEvents; i++) {
    _outcomeArray.push('Whistle');
    outcomesForUi[4] += 1;
  }
  // Fill the rest of the array with random events
  for (var j = 0; j < 24 - whistleEvents; j++) {
    var index = helpers.random(0, 7);
    _outcomeArray.push(_possibleOutcomes[index]);
    index < 4 ? outcomesForUi[index] += 1 : outcomesForUi[4] += 1;
  }
  // Shuffle the array
  _outcomeArray = shuffle(_outcomeArray);
  // Send the ui array for preparing remaining cards sidebar
  uiCardNumber.set(outcomesForUi);
}

function clear() {
  _outcomeArray = [];
}

function getOutcome(index) {
  return _outcomeArray[index];
}

module.exports = outcomes;
