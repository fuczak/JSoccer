var helpers = require('./helpers');
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
  for (var i = 0; i < whistleEvents; i++) {
    _outcomeArray.push('Whistle');
  }
  // Fill the rest of the array with random events
  for (var j = 0; j < 24 - whistleEvents; j++) {
    _outcomeArray.push(_possibleOutcomes[helpers.random(0, 7)]);
  }
  // Shuffle the array
  _outcomeArray = shuffle(_outcomeArray);
  console.log(_outcomeArray);
}

function clear() {
  _outcomeArray = [];
}

function getOutcome(index) {
  return _outcomeArray[index];
}

module.exports = outcomes;
