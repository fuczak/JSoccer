var random = require('lodash/number/random');
var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');

module.exports = function(state, index) {

  // Prepare index to evaluate outcome
  var picked = outcomes.getOutcome(index);

  var shouldContinue = true;
  var isWhistle = false;

  switch (picked.outcome.type) {
    case 'Goal':
      shouldContinue = false;
      uiCardNumber.decrement(0);
      break;
    case 'Chance':
      shouldContinue = false;
      uiCardNumber.decrement(1);
      break;
    case 'Pass':
      shouldContinue = true;
      uiCardNumber.decrement(2);
      break;
    case 'Tackle':
      shouldContinue = false;
      uiCardNumber.decrement(3);
      break;
    case 'Injury':
      shouldContinue = true;
      uiCardNumber.decrement(4);
      break;
    case 'Offside':
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Penalty':
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Red Card':
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Whistle':
      shouldContinue = false;
      isWhistle = true;
      uiCardNumber.decrement(4);
      break;
  }

  return {
    shouldContinue: shouldContinue,
    isWhistle: isWhistle,
    index: picked.index,
    lostEnergy: random(3, 10),
    type: picked.outcome.type
  };
};
