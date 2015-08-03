var teams = require('./teams')

function init() {
  var playerTeamSelect = document.getElementById('player-team-select');
  var cpuTeamSelect = document.getElementById('cpu-team-select');

  playerTeamSelect.options[0] = new Option('Text 1', 'value 1');

}

module.exports = init;
