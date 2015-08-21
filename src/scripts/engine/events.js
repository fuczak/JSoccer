var uiScoreboard = require('../ui/scoreboard');
var uiCardNumber = require('../ui/cardNumber');

var events = {
  goal: goal,
  chance: chance
};

function goal(currentTeamBoard) {
  uiScoreboard.goal(currentTeamBoard);
  uiCardNumber.decrement(0);
  return {
    isSuccess: true,
    shouldContinue: false
  };
}

function chance(currentTeamBoard, attackingTeam, defendingTeam) {
  // Logic
  console.log(attackingTeam.skill.attack, defendingTeam.skill);
  uiCardNumber.decrement(1);
  return {
    isSuccess: true,
    shouldContinue: false
  };
}

module.exports = events;
