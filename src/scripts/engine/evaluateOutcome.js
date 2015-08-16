var random = require('lodash/number/random');
var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');

// Experimental - simulate random outcomes
var helpers = require('../helpers');

module.exports = function(state, index) {

  // Prepare index to evaluate outcome
  // var index = e === undefined ? undefined : e.target.id;
  var picked = outcomes.getOutcome(index);

  var shouldContinue = true;
  var isWhistle = false;

  switch (picked.outcome.type) {
    case 'Goal':
      shouldContinue = false;
      uiCardNumber.decrement(0);
      break;
    case 'Chance':
      uiCardNumber.decrement(1);
      break;
    case 'Pass':
      uiCardNumber.decrement(2);
      break;
    case 'Tackle':
      shouldContinue = false;
      uiCardNumber.decrement(3);
      break;
    case 'Injury':
      uiCardNumber.decrement(4);
      break;
    case 'Offside':
      shouldContinue = false;
      uiCardNumber.decrement(4);
      break;
    case 'Penalty':
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
  var helperText = picked.outcome.type;
  helperText += shouldContinue ? '. The action continues.' : '. Switch Priority.';
  return {
    shouldContinue: shouldContinue,
    isWhistle: isWhistle,
    index: picked.index,
    lostEnergy: random(3, 10),
    type: picked.outcome.type,
    text: helperText
  };
};
