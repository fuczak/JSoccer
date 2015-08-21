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
  _team.skill.defense *= +(1 - 1 / pickedFormation[0]);
  _team.skill.midfield *= +(1 - 1 / pickedFormation[1]);
  _team.skill.attack *= +(1 - 1 / pickedFormation[2]);
  setMentality(1);
}

function setMentality(mentality) {
  _team.mentality = mentality;
}

function getMentality() {
  return _team.mentality;
}

module.exports = player;
