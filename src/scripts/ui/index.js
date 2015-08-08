var $ = require('jquery');
var prepareTeams = require('./prepareTeams');
var arrangeSidebarButtons = require('./arrangeSidebarButtons');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');
var cardClickHandler = require('./cardClickHandler');
var generateCards = require('./generateCards');
var cardNumber = require('./cardNumber');
var engine = require('../engine/index');

var ui = {
	init: init,
	cardNumber: cardNumber
};

function init() {
	prepareTeams();
	arrangeSidebarButtons();
	generateCards();
	// Register event handlers;
	$(window).resize(arrangeSidebarButtons);
	$('#overlay .flag').on('click', setTeams);
	$('#confirmTactic').on('click', setTactics);
	$('.card').on('click', cardClickHandler);
	$('#subButtons button').on('click', function(e) {
		engine.delegate('makeSub', e);
	});
}

module.exports = ui;
