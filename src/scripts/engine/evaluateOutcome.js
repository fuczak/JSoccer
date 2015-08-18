var random = require('lodash/number/random');
var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');

module.exports = function(state, index) {

  // Prepare index to evaluate outcome
  var picked = outcomes.getOutcome(index);

  var shouldContinue;
  var isSuccess;
  var isWhistle;

  switch (picked.outcome.type) {
    case 'Goal':
      isSuccess = true;
      shouldContinue = false;
      uiCardNumber.decrement(0);
      break;
    case 'Chance':
      isSuccess = true
      shouldContinue = false;
      uiCardNumber.decrement(1);
      break;
    case 'Pass':
      isSuccess = true;
      shouldContinue = true;
      uiCardNumber.decrement(2);
      break;
    case 'Tackle':
      isSuccess = false;
      shouldContinue = false;
      uiCardNumber.decrement(3);
      break;
    case 'Injury':
      isSuccess = false;
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Offside':
      isSuccess = false;
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Penalty':
      isSuccess = true;
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Red Card':
      isSuccess = false;
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Whistle':
      isSuccess = false;
      shouldContinue = false;
      isWhistle = true;
      uiCardNumber.decrement(4);
      break;
  }

  return {
    shouldContinue: shouldContinue,
    isSuccess: isSuccess,
    isWhistle: isWhistle,
    index: picked.index,
    lostEnergy: random(3, 10),
    type: picked.outcome.type
  };
};
