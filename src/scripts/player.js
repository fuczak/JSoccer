var player = {
  setTeam: setTeam,
  getTeam: getTeam,
  setTactics: setTactics
};

var team;

function setTeam(selectedTeam) {
  team = selectedTeam;
}

function getTeam() {
  return team;
}

function setTactics(formation, mentality) {
  // Affect the team skill levels
  console.log(team);
}

module.exports = player;
