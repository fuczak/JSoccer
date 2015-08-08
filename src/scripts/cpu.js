var helpers = require('./helpers');

var _team;

var cpu = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics
};

function setTeam(selectedTeam) {
  _team = selectedTeam;
}

function getTeam() {
  return _team;
}

function setTactics(formation, mentality) {
  team.skill.defense *= helpers.getTacticCoef(helpers.random(3, 5));
  team.skill.midfield *= helpers.getTacticCoef(helpers.random(3, 5));
  team.skill.attack *= helpers.getTacticCoef(helpers.random(3, 5));
}

module.exports = cpu;
