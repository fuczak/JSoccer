var random = require('lodash/number/random');
var config = require('./config');

var _team;

var cpu = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics
};

function setTeam(selectedTeam) {
  _team = selectedTeam;
  _team.energy = 100;
}

function getTeam() {
  return _team;
}

function setTactics(formation) {
  // Maybe pick a best counter - formation?
  _team.skill.defense *= config.TACTIC_COEF(random(3, 5));
  _team.skill.midfield *= config.TACTIC_COEF(random(3, 5));
  _team.skill.attack *= config.TACTIC_COEF(random(3, 5));
}

module.exports = cpu;
