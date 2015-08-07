var teams = require('./teams');
var player = require('./player');
var cpu = require('./cpu');
var engine = require('./engine');
var helpers = require('./helpers');
var $ = require('jquery');

function setTeams(e) {
	// Set target correctly even if user clicks on flag
	var target = $(e.target).closest('.flag');

	// Return if target is not a team card
	if (target === undefined) return;

	// Set user team and paint it to scoreboard
	teams.setPlayerTeam(target.text());
	$('#userTeam').append(target.html());

	// Set CPU team and paint it to scoreboard
	$('#cpuTeam').append(teams.setCpuTeam);

	// Move overlay out of the way
	$('#overlay').addClass('overlay-hide');
}

function setTactics(e) {
	e.preventDefault();
	var formation = $('#formation .active input').val();
	var mentality = $('#mentality .active input').val();
	player.setTactics(formation, mentality);
	cpu.setTactics(formation, mentality);
	$('#tacticSetup').addClass('tactic-hide');
	$('#infoBar').removeClass('tactic-hide');
}

function init() {
	teams.prepare();
	helpers.arrangeButtons();
	$(window).resize(helpers.arrangeButtons);
	$('#overlay').on('click', setTeams);
	$('#confirmTactic').on('click', setTactics);
	engine.init();
}

module.exports = init;
