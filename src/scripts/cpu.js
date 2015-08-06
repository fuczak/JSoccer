var helpers = require('./helpers');

var team;

var cpu = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics
};

function setTeam(selectedTeam) {
  team = selectedTeam;
}

function getTeam() {
  return team;
}

function setTactics(formation, mentality) {
  team.skill.defense *= helpers.getTacticCoef(helpers.random(3, 5));
  team.skill.midfield *= helpers.getTacticCoef(helpers.random(3, 5));
  team.skill.attack *= helpers.getTacticCoef(helpers.random(3, 5));
  console.log(team.skill);
}

module.exports = cpu;
