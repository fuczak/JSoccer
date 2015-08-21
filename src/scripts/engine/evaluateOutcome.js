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

  // Get reference to current team's scoreaboard

  switch (picked.outcome.type) {
    case 'Goal':
      eventOutcome = events.goal(currentTeamBoard);
      isSuccess = eventOutcome.isSuccess;
      shouldContinue = eventOutcome.shouldContinue;
      break;
    case 'Chance':
      eventOutcome = events.chance(currentTeamBoard, attackingTeam, defendingTeam);
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
