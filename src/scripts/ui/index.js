var $ = require('jquery');
var prepareTeams = require('./prepareTeams');
var arrangeSidebarButtons = require('./arrangeSidebarButtons');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');

var ui = {
	init: init
};

function init() {
	$('#overlay').removeClass('overlay-hide');
	$('#tacticSetup').removeClass('tactic-hide');
	prepareTeams();
	arrangeSidebarButtons();
	// Register event handlers;
	$(window).resize(arrangeSidebarButtons);
	$('#overlay .flag').on('click', setTeams);
	$('#confirmTactic').on('click', setTactics);
}

module.exports = ui;
