var teams = require('./teams');
var player = require('./player');
var cpu = require('./cpu');
var engine = require('./engine');
var helpers = require('./helpers');
var $ = require('jquery');

function setTeams(e) {
	// Set target correctly even if user clicks on flag
	var target = e.target.closest('.flag');

	// Return if target is not a team card
	if (target === null) return;

	// Set user team and paint it to scoreboard
	teams.setPlayerTeam(target.textContent);
	$('#userTeam').append(target.innerHTML);

	// Set CPU team and paint it to scoreboard
	$('#cpuTeam').append(teams.setCpuTeam);

	// Move overlay out of the way
	$('#overlay').addClass('overlay-hide');
}

function setTactics(e) {
	e.preventDefault();
	var formation = $('#formation').find('.active').children()[0].value;
	var mentality = $('#mentality').find('.active').children()[0].value;
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
