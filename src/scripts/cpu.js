var cpu = {
  setTeam: setTeam,
  getTeam: getTeam
};

var team;

function setTeam(team) {
  team = team;
}

function getTeam() {
  return team;
}

module.exports = cpu;
