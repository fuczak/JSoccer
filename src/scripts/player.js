var config = require('./config');

var _team;
var _formations = ['532', '442', '433', '352', '343'];

var player = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics,
  setMentality: setMentality,
  getMentality: getMentality
};

function setTeam(selectedTeam) {
  _team = selectedTeam;
  _team.energy = 100;
}

function getTeam() {
  return _team;
}

function setTactics(formation) {
  var pickedFormation = _formations[formation];
  _team.skill.defense *= +config.TACTIC_COEF(pickedFormation[0]);
  _team.skill.midfield *= +config.TACTIC_COEF(pickedFormation[1]);
  _team.skill.attack *= +config.TACTIC_COEF(pickedFormation[2]);
  setMentality(1);
}

function setMentality(mentality) {
  _team.mentality = mentality;
}

function getMentality() {
  return _team.mentality;
}

module.exports = player;
