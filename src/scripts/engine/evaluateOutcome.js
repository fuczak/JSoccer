var random = require('lodash/number/random');
var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var uiCardNumber = require('../ui/cardNumber');
var events = require('./events');

module.exports = function(state, index) {

  var shouldContinue;
  var isSuccess;
  var isWhistle;

  var attackingTeam;
  var defendingTeam;
  var currentTeamBoard;

  // Prepare index to evaluate outcome
  var eventOutcome;
  var picked = outcomes.getOutcome(index);

  if (index) {
    attackingTeam = state.player;
    defendingTeam = state.cpu;
    currentTeamBoard = 'userScore';
  } else {
    attackingTeam = state.cpu;
    defendingTeam = state.player;
    currentTeamBoard = 'cpuScore';
  }

  switch (picked.outcome.type) {
    case 'Goal':
      eventOutcome = events.goal(currentTeamBoard);
      break;
    case 'Chance':
      eventOutcome = events.chance(currentTeamBoard, attackingTeam, defendingTeam);
      break;
    case 'Pass':
      eventOutcome = events.pass(attackingTeam, defendingTeam);
      uiCardNumber.decrement(2);
      break;
    case 'Tackle':
      eventOutcome = events.tackle(attackingTeam, defendingTeam);
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
// I could simply assign isSuccess and shouldContinue to return values of events.outcome module
// so I won't have to declate isSuccess and shouldContinue variables
  return {
    shouldContinue: eventOutcome && eventOutcome.shouldContinue || shouldContinue,
    isSuccess: eventOutcome && eventOutcome.isSuccess || isSuccess,
    isWhistle: isWhistle,
    index: picked.index,
    lostEnergy: random(3, 10),
    type: picked.outcome.type
  };
};
