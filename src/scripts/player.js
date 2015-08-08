var helpers = require('./helpers');

var team;

var player = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics,
  setMentality: setMentality,
  getMentality: getMentality
};

function setTeam(selectedTeam) {
  team = selectedTeam;
}

function getTeam() {
  return team;
}

function setTactics(formation, mentality) {
  setMentality(mentality);
  var array = formation.split('');
  team.skill.defense *= helpers.getTacticCoef(array[0]);
  team.skill.midfield *= helpers.getTacticCoef(array[1]);
  team.skill.attack *= helpers.getTacticCoef(array[2]);
}

function setMentality(mentality) {
  team.mentality = helpers.getMentalityCoef(mentality);
}

function getMentality() {
  return team.mentality;
}

module.exports = player;
