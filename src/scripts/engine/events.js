var random = require('lodash/number/random');
var uiScoreboard = require('../ui/scoreboard');
var uiCardNumber = require('../ui/cardNumber');

var MENTALITY_COEF = 1.5;
var ENERGY_COEF = 0.01;

var events = {
  goal: goal,
  chance: chance,
  pass: pass,
  tackle: tackle,
  injury: injury,
  offside: offside,
  penalty: penalty,
  redCard: redCard,
  whistle: whistle
};

function goal(currentTeamBoard) {
  uiScoreboard.goal(currentTeamBoard);
  uiCardNumber.modify(0, 'decrement');
  return {
    isSuccess: true,
    shouldContinue: false
  };
}

function _evaluateSuccess(aSkill, dSkill) {
  return random(0, aSkill + dSkill) <= aSkill;
}

function chance(currentTeamBoard, attackingTeam, defendingTeam) {
  var aSkill = attackingTeam.skill.attack * attackingTeam.energy * ENERGY_COEF;
  var dSkill = defendingTeam.skill.defense * defendingTeam.energy *ENERGY_COEF;
  if (attackingTeam.mentality === 2) aSkill *= MENTALITY_COEF;
  if (defendingTeam.mentality === 0) dSkill *= MENTALITY_COEF;
  var isSuccess = _evaluateSuccess(aSkill, dSkill);
  var shouldContinue = isSuccess ? false : _evaluateSuccess(aSkill, dSkill);
  if (isSuccess) uiScoreboard.goal(currentTeamBoard);
  uiCardNumber.modify(1, 'decrement');
  return {
    isSuccess: isSuccess,
    shouldContinue: shouldContinue
  };
}

function pass(attackingTeam, defendingTeam) {
  var aSkill = attackingTeam.skill.midfield * attackingTeam.energy * ENERGY_COEF;
  var dSkill = defendingTeam.skill.midfield * defendingTeam.energy * ENERGY_COEF;
  if (attackingTeam.mentality === 1) aSkill *= MENTALITY_COEF;
  if (defendingTeam.mentality === 1) dSkill *= MENTALITY_COEF;
  var isSuccess = _evaluateSuccess(aSkill, dSkill);
  var shouldContinue = isSuccess;
  uiCardNumber.modify(2, 'decrement');
  return {
    isSuccess: isSuccess,
    shouldContinue: shouldContinue
  };
}

function tackle(attackingTeam, defendingTeam) {
  var aSkill = attackingTeam.skill.midfield * attackingTeam.energy * ENERGY_COEF;
  var dSkill = (defendingTeam.skill.midfield + defendingTeam.skill.defense) * defendingTeam.energy * ENERGY_COEF;
  if (attackingTeam.mentality === 1) aSkill *= MENTALITY_COEF;
  var isSuccess = _evaluateSuccess(aSkill, dSkill);
  var shouldContinue = isSuccess;
  uiCardNumber.modify(3, 'decrement');
  return {
    isSuccess: isSuccess,
    shouldContinue: shouldContinue
  };
}

function injury(attackingTeam, defendingTeam) {
  var aSkill = attackingTeam.energy * ENERGY_COEF;
  var dSkill = defendingTeam.energy * ENERGY_COEF;
  var isSuccess = _evaluateSuccess(aSkill, dSkill);
  var shouldContinue = isSuccess;
  uiCardNumber.modify(4, 'decrement');
  return {
    isSuccess: isSuccess,
    shouldContinue: shouldContinue
  };
}

function offside(attackingTeam, defendingTeam) {
  uiCardNumber.modify(4, 'decrement');
  return {
    isSuccess: false,
    shouldContinue: false
  };
}

function penalty(currentTeamBoard, attackingTeam, defendingTeam) {
  var aSkill = attackingTeam.skill.attack;
  var dSkill = defendingTeam.skill.defense;
  var isSuccess = _evaluateSuccess(aSkill, dSkill);
  if (isSuccess) uiScoreboard.goal(currentTeamBoard);
  uiCardNumber.modify(4, 'decrement');
  return {
    isSuccess: isSuccess,
    shouldContinue: false
  };
}

function redCard(attackingTeam, defendingTeam) {
  uiCardNumber.modify(4, 'decrement');
  return {
    isSuccess: false,
    shouldContinue: false
  };
}

function whistle() {
  uiCardNumber.modify(4, 'decrement');
  return {
    isSuccess: false,
    shouldContinue: false
  };
}

module.exports = events;
