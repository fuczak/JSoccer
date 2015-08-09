var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');
var cardToCommentary = require('../ui/cardToCommentary');

module.exports = function(state, e) {
  // Prepare index to evaluate outcome
  var index = e === undefined ? undefined : e.target.id;
  // Get current values
  var picked = outcomes.getOutcome(index);
  console.log(picked);
  var playerSkill = player.getTeam();
  var cpuSkill = cpu.getTeam();

  switch (picked.outcome.type) {
    case 'Goal':
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
  cardToCommentary(picked.index, picked.outcome.type);
  return !state.isPlayerTurn;
};
