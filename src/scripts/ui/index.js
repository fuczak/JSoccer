var $ = require('jquery');
var prepareTeams = require('./prepareTeams');
var arrangeSidebarButtons = require('./arrangeSidebarButtons');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');
var cardClickHandler = require('./cardClickHandler');
var generateCards = require('./generateCards');
var engine = require('../engine/index');

var ui = {
	init: init
};

function init() {
	$('#overlay').removeClass('overlay-hide');
	$('#tacticSetup').removeClass('tactic-hide');
	prepareTeams();
	arrangeSidebarButtons();
	generateCards();
	// Register event handlers;
	$(window).resize(arrangeSidebarButtons);
	$('#overlay .flag').on('click', setTeams);
	$('#confirmTactic').on('click', setTactics);
	$('.card').on('click', cardClickHandler);
}

module.exports = ui;
