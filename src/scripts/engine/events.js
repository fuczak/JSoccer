var random = require('lodash/number/random');
var uiScoreboard = require('../ui/scoreboard');
var uiCardNumber = require('../ui/cardNumber');

var MENTALITY_COEF = 1.5;

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
  var aSkill = attackingTeam.skill.attack * attackingTeam.energy / 100;
  var dSkill = defendingTeam.skill.defense * defendingTeam.energy / 100;
  if (attackingTeam.mentality === 2) aSkill *= MENTALITY_COEF;
  if (defendingTeam.mentality === 0) dSkill *= MENTALITY_COEF;
  var isSuccess = random(0, aSkill + dSkill) <= aSkill;
  var shouldContinue = isSuccess ? false : random(0, aSkill + dSkill) <= aSkill;
  if (isSuccess) uiScoreboard.goal(currentTeamBoard);
  uiCardNumber.decrement(1);
  return {
    isSuccess: isSuccess,
    shouldContinue: shouldContinue
  };
}

module.exports = events;
