var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');

module.exports = function(state, index) {
  // Return if evaluation is in process
  if (state.evaluating) return;
  // Set global state as evaluating
  state.evaluating = true;
  // Get current values
  var outcome = outcomes.getOutcome(index);
  var playerSkill = player.getTeam();
  var cpuSkill = cpu.getTeam();

  console.log(state, outcome, playerSkill, cpuSkill);

  switch (outcome) {
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

  // Throttle player input
  setTimeout(function() {
    state.evaluating = false;
  }, 1000);

  return outcome;
};
