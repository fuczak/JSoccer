var random = require('lodash/number/random');
var shuffle = require('lodash/collection/shuffle');
var some = require('lodash/collection/some');
var filter = require('lodash/collection/filter');
var uiCardNumber = require('./ui/cardNumber');

var _possibleOutcomes = ['Goal', 'Chance', 'Pass', 'Tackle', 'Injury', 'Offside', 'Penalty', 'Red Card']; // Plus 'Whistle'
var _outcomeArray;

var outcomes = {
  generate: generate,
  getOutcome: getOutcome,
  defensiveSubstitution: defensiveSubstitution,
  offensiveSubstitution: offensiveSubstitution
};

function generate() {
  _outcomeArray = [];
  // Prepare array for ui painting
  var outcomesForUi = [0, 0, 0, 0, 0];
  // First, add between one and two Whistle events
  var whistleEvents = random(1, 2);
  for (var i = 0; i < whistleEvents; i++) {
    _outcomeArray.push({type: 'Whistle', picked: false});
    outcomesForUi[4] += 1;
  }
  // Add a specific type of outcome for debug reasons
  // var debugEvents = 10;
  // for (var j = 0; j < debugEvents; j++) {
  //   _outcomeArray.push({type: 'Injury', picked: false});
  //   outcomesForUi[4] += 1;
  // }
  // Fill the rest of the array with random events
  for (var k = 0; k < 24 - whistleEvents; k++) {
    var index = random(0, 6);
    _outcomeArray.push({type: _possibleOutcomes[index], picked: false});
    index < 4 ? outcomesForUi[index] += 1 : outcomesForUi[4] += 1;
  }
  // Shuffle the array
  _outcomeArray = shuffle(_outcomeArray);
  // Send the ui array for preparing remaining cards sidebar
  uiCardNumber.set(outcomesForUi);
}
function getOutcome(index) {
  // If index is undefined get the random outcome for cpu
  if (index === undefined) {
    var pickedIndex = random(0, 23);
    if (_outcomeArray[pickedIndex].picked) {
      return getOutcome();
    } else {
      _outcomeArray[pickedIndex].picked = true;
      return {outcome: _outcomeArray[pickedIndex], index: pickedIndex};
    }
  }
  _outcomeArray[index].picked = true;
  return {outcome: _outcomeArray[index], index: index};
}

function _findSatisfyingIndex(type) {
  var indexes = [];
  _outcomeArray.forEach(function(e, i) {
    if (e.type === type && e.picked === false) indexes.push(i);
  });
  return indexes[random(0, indexes.length - 1)];
}

function defensiveSubstitution() {
  var beneficialOutcomes = [{type: 'Whistle', uiNumber: 4}, {type: 'Tackle', uiNumber: 3}];
  var outcomeToBeAdded = beneficialOutcomes[random(0, beneficialOutcomes.length - 1)];
  if (some(_outcomeArray, {type: 'Goal', picked: false})) {
    _outcomeArray[_findSatisfyingIndex('Goal')] = {type: outcomeToBeAdded.type, picked: false};
    uiCardNumber.modify(0, 'decrement');
    uiCardNumber.modify(outcomeToBeAdded.uiNumber, 'increment');
  } else if (some(_outcomeArray, {type: 'Chance', picked: false})) {
    _outcomeArray[_findSatisfyingIndex('Chance')] = {type: outcomeToBeAdded.type, picked: false};
    uiCardNumber.modify(1, 'decrement');
    uiCardNumber.modify(outcomeToBeAdded.uiNumber, 'increment');
  }
}

function offensiveSubstitution() {
  var beneficialOutcomes = [{type: 'Goal', uiNumber: 0}, {type: 'Chance', uiNumber: 1}];
  var outcomeToBeAdded = beneficialOutcomes[random(0, beneficialOutcomes.length - 1)];
  if (filter(_outcomeArray, {type: 'Whistle', picked: false}).length > 1) {
    _outcomeArray[_findSatisfyingIndex('Whistle')] = {type: outcomeToBeAdded.type, picked: false};
    uiCardNumber.modify(4, 'decrement');
    uiCardNumber.modify(outcomeToBeAdded.uiNumber, 'increment');
  } else if (some(_outcomeArray, {type: 'Tackle', picked: false })) {
    _outcomeArray[_findSatisfyingIndex('Tackle')] = {type: outcomeToBeAdded.type, picked: false};
    uiCardNumber.modify(3, 'decrement');
    uiCardNumber.modify(outcomeToBeAdded.uiNumber, 'increment');
  }
}

module.exports = outcomes;
