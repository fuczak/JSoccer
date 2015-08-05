var cpu = {
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
  // Randomly affect the team skill levels?
}

module.exports = cpu;
