var $ = require('jquery');
var q = require('q');
var random = require('lodash/number/random');
var prepareTeams = require('./prepareTeams');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');
var cardNumber = require('./cardNumber');

module.exports = function init(makeSub, changeMentality) {

	var deferred = q.defer();

	// Show available teams
	prepareTeams();
	$('#overlay').removeClass('overlay-hide');
	$('#overlay .flag').on('click', setTeams);

	// Tactic setup
	$('#tacticSetup').removeClass('main-splash-hide');
	$('#confirmTactic').on('click', setTactics);

	// Sidebar tactics setup
	$('.progress-bar').removeClass().addClass('progress-bar progress-bar-info').css('width', '100%');
	$('#subButtons .btn').removeClass('disabled').prop('disabled', false);
	$('#subButtons .btn').on('click', function() {
		makeSub();
		$(this).addClass('disabled');
	});
	$('#mentalityButtons label').on('click', function() {
		changeMentality(+$(this).find('input').val());
	});

	// Sidebar remaining setup
	cardNumber.set([0, 0, 0, 0, 0]);

	// Coin toss
	$('#pitch-setup').removeClass('pitch-overlay-hidden');
	$('#pitch-setup .btn').on('click', function() {
		$('#pitch-setup').addClass('pitch-overlay-hidden');
		deferred.resolve(!!random(0, 1));
	});

	return deferred.promise;
};
