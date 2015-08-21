var $ = require('jquery');

var scoreboard = {
  goal: goal,
  reset: reset
};

function goal(team) {
  var currentTeamBoard = $('#' + team);
  var currentScore = +currentTeamBoard.text();
  currentTeamBoard.text(currentScore + 1);
}

function reset() {
  $('#userScore').text(0);
  $('#cpuScore').text(0);
}

module.exports = scoreboard;
