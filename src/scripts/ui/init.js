var $ = require('jquery');
var q = require('q');
var random = require('lodash/number/random');
var prepareTeams = require('./prepareTeams');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');
var cardNumber = require('./cardNumber');
var scoreboard = require('./scoreboard');

module.exports = function init(makeSub, changeMentality) {

	var deferred = q.defer();

	// Show available teams
	prepareTeams();
	$('#overlay').removeClass('overlay-hide');
	$('#overlay .flag').on('click', setTeams);

	// Reset scoreboad
	scoreboard.reset();

	// Tactic setup
	$('#confirmTactic').on('click', setTactics);

	// Sidebar tactics setup
	$('.progress-bar').removeClass().addClass('progress-bar progress-bar-info').css('width', '100%');
	$('#subButtons .btn').removeClass('disabled').prop('disabled', false);
	$('#subButtons .btn').on('click', function() {
		if ($(this).hasClass('disabled')) return;
		makeSub();
		$(this).addClass('disabled');
	});
	$('#mentalityButtons label').on('click', function() {
		changeMentality(+$(this).find('input').val());
	});

	// Click handlers for tactic and remaining cards overlays
	$('#tacticShowButton').off('click');
	$('#remainingShowButton').off('click');
	$('#tacticShowButton').on('click', function() {
		$('#tacticOverlay').toggleClass('main-splash-hide');
	});
	$('#remainingShowButton').on('click', function() {
		$('#remainingOverlay').toggleClass('main-splash-hide');
	});

	// Sidebar remaining setup
	cardNumber.set([0, 0, 0, 0, 0]);

	// Coin toss
	$('#pitch-setup').removeClass('pitch-overlay-hidden');
	$('#confirmTactic').on('click', function() {
		$('#pitch-setup').addClass('pitch-overlay-hidden');
		deferred.resolve();
	});

	return deferred.promise;
};
