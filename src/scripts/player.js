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
  team.skill.defense *= (1-1/array[0]);
  team.skill.midfield *= (1-1/array[1]);
  team.skill.attack *= (1-1/array[2]);
}

function setMentality(mentality) {
  team.mentality = mentality;
}

function getMentality() {
  return team.mentality;
}

module.exports = player;
