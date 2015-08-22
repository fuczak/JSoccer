var random = require('lodash/number/random');
var shuffle = require('lodash/collection/shuffle');
var uiCardNumber = require('./ui/cardNumber');

var _possibleOutcomes = ['Goal', 'Chance', 'Pass', 'Tackle', 'Injury', 'Offside', 'Penalty', 'Red Card']; // Plus 'Whistle'
var _outcomeArray;

var outcomes = {
  generate: generate,
  getOutcome: getOutcome
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
  var chanceEvents = 10;
  for (var j = 0; j < chanceEvents; j++) {
    _outcomeArray.push({type: 'Chance', picked: false});
    outcomesForUi[1] += 1;
  }
  // Fill the rest of the array with random events
  for (var k = 0; k < 24 - whistleEvents - chanceEvents; k++) {
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

module.exports = outcomes;
