var helpers = require('./helpers');

var _team;

var player = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics,
  setMentality: setMentality,
  getMentality: getMentality
};

function setTeam(selectedTeam) {
  _team = selectedTeam;
}

function getTeam() {
  return _team;
}

function setTactics(formation, mentality) {
  setMentality(mentality);
  var array = formation.split('');
  _team.skill.defense *= helpers.getTacticCoef(array[0]);
  _team.skill.midfield *= helpers.getTacticCoef(array[1]);
  _team.skill.attack *= helpers.getTacticCoef(array[2]);
}

function setMentality(mentality) {
  _team.mentality = helpers.getMentalityCoef(mentality);
}

function getMentality() {
  return _team.mentality;
}

module.exports = player;
