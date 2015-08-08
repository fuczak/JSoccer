var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');

module.exports = function(index) {
  var outcome = outcomes.getOutcome(index);
  var playerSkill = player.getTeam();
  var cpuSkill = cpu.getTeam();

  console.log(outcome, playerSkill, cpuSkill);

  return outcome;
};
