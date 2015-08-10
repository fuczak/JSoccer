var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');
var cardToCommentary = require('../ui/cardToCommentary');

// Experimental - simulate random outcomes
var helpers = require('../helpers');

module.exports = function(state, e) {
  // Prepare index to evaluate outcome
  var index = e === undefined ? undefined : e.target.id;
  // Get current values
  var picked = outcomes.getOutcome(index);
  var playerSkill = player.getTeam();
  var cpuSkill = cpu.getTeam();
  var shouldSwitch;

  switch (picked.outcome.type) {
    case 'Goal':
      shouldSwitch = true;
      uiCardNumber.decrement(0);
      break;
    case 'Chance':
      uiCardNumber.decrement(1);
      break;
    case 'Pass':
      uiCardNumber.decrement(2);
      break;
    case 'Tackle':
      uiCardNumber.decrement(3);
      break;
    case 'Injury':
      uiCardNumber.decrement(4);
      break;
    case 'Offside':
      uiCardNumber.decrement(4);
      break;
    case 'Penalty':
      uiCardNumber.decrement(4);
      break;
    case 'Red Card':
      uiCardNumber.decrement(4);
      break;
    case 'Whistle':
      uiCardNumber.decrement(4);
      break;
  }
  var random = helpers.random(0, 1);
  var helperText = shouldSwitch ? 'It is now player turn, ' + picked.outcome.type : 'It is now cpu turn, ' + picked.outcome.type;
  cardToCommentary(picked.index, helperText);
  return shouldSwitch;
};
