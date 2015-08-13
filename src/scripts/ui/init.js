var $ = require('jquery');
var q = require('q');
var random = require('lodash/number/random');
var prepareTeams = require('./prepareTeams');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');

module.exports = function init() {

	var deferred = q.defer();

	// Show available teams
	$('#overlay').removeClass('overlay-hide');
	prepareTeams();
	$('#overlay .flag').on('click', setTeams);

	// Tactic setup
	$('#tacticSetup').removeClass('tactic-hide');
	$('#confirmTactic').on('click', setTactics);

	// Coin toss
	$('#pitch-overlay').removeClass('pitch-overlay-hidden');
	$('#pitch-overlay .btn').on('click', function() {
		var playerStarts = !!random(0, 1);
		$('#pitch-overlay').addClass('pitch-overlay-hidden');
		deferred.resolve(playerStarts);
	});

	return deferred.promise;
};
