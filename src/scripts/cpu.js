var random = require('lodash/number/random');

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
}

module.exports = cpu;
