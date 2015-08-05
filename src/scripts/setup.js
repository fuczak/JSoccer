var teams = require('./teams');
var $ = require('jquery');
var ramjet = require('ramjet');

function handler(e) {
	// Set target correctly even if user clicks on flag
	var target = e.target.closest('.flag');
	// Set user team and paint it to scoreboard
	teams.setPlayerTeam(target.textContent);
	$('#userTeam').append(target.innerHTML);

	// Set CPU team and paint it to scoreboard
	$('#cpuTeam').append(teams.setCpuTeam);

	// Move overlay out of the way
	$('#overlay').addClass('overlay-hide');

}

function init() {
  teams.prepare();
  $('#overlay').on('click', handler);
}

module.exports = init;
