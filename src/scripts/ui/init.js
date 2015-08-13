var $ = require('jquery');
var q = require('q');
var random = require('lodash/number/random');
var prepareTeams = require('./prepareTeams');
var setTeams = require('./setTeams');
var setTactics = require('./setTactics');

module.exports = function init() {

	var deferred = q.defer();

	// Show available teams
	prepareTeams();
	$('#overlay').removeClass('overlay-hide');
	$('#overlay .flag').on('click', setTeams);

	// Tactic setup
	$('#tacticSetup').removeClass('tactic-hide');
	$('#confirmTactic').on('click', setTactics);

	// Coin toss
	$('#pitch-setup').removeClass('pitch-overlay-hidden');
	$('#pitch-setup .btn').on('click', function() {
		var playerStarts = !!random(0, 1);
		$('#pitch-setup').addClass('pitch-overlay-hidden');
		deferred.resolve(playerStarts);
	});

	// Commentary Init
	$('#commentary p').text('Match game init. Pick coin side.').addClass('entered');

	return deferred.promise;
};
