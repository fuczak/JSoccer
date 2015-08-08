var $ = require('jquery');
var teams = require('../teams');
var player = require('../player');
var cpu = require('../cpu');
var paintTeamNode = require('./paintTeamNode');

module.exports = function(e) {
	// Set target correctly even if user clicks on flag
	var target = $(e.target).closest('.flag');
	var id = target.text();

	// Set user team and paint it to scoreboard
	var playerSelected = teams.getTeam(id);
	player.setTeam(playerSelected);
	$('#userTeam').append($(paintTeamNode(playerSelected)).html());
	// $('#userTeam').append(target.html());

	// Set CPU team and paint it to scoreboard
	var cpuSelected = teams.getTeamForCpu(id);
	cpu.setTeam(cpuSelected);
	$('#cpuTeam').append($(paintTeamNode(cpuSelected)).html());

	// Move overlay out of the way
	$('#overlay').addClass('overlay-hide');
}