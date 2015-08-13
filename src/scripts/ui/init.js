var $ = require('jquery');
var q = require('q');
var random = require('lodash/number/random');
var prepareTeams = require('./prepareTeams');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');
var cardNumber = require('./cardNumber');

module.exports = function init() {

	var deferred = q.defer();

	// Show available teams
	prepareTeams();
	$('#overlay').removeClass('overlay-hide');
	$('#overlay .flag').on('click', setTeams);

	// Tactic setup
	$('#tacticSetup').removeClass('main-splash-hide');
	$('#confirmTactic').on('click', setTactics);

	// Sidebar setup
	cardNumber.set([0, 0, 0, 0, 0]);

	// Coin toss
	$('#pitch-setup').removeClass('pitch-overlay-hidden');
	$('#pitch-setup .btn').on('click', function() {
		var playerStarts = !!random(0, 1);
		$('#pitch-setup').addClass('pitch-overlay-hidden');
		deferred.resolve(playerStarts);
	});

	return deferred.promise;
};
