var $ = require('jquery');
var ramjet = require('ramjet');
var q = require('q');
var getCommentaryText = require('./getCommentaryText');

module.exports = function(outcome, attackingTeam, defendingTeam) {
	var text = getCommentaryText(outcome.type, outcome.isSuccess, outcome.shouldContinue, attackingTeam, defendingTeam);
	var deferred = q.defer();
	var a = $('#' + outcome.index).find('.front')[0];
	var b = document.getElementById('commentary');
	b.children[0].classList.remove('entered');
	setTimeout(function() {
		b.children[0].textContent = '';
		b.classList.remove('ramjet-hidden');
		ramjet.transform(a, b, {
		  done: function() {
		   b.children[0].textContent = text;
		   b.children[0].classList.add('entered');
		   b.classList.remove('ramjet-hidden');
		   deferred.resolve();
		  },
		  duration: 400,
		  easing: ramjet.easeInOut
		});
		$('#' + outcome.index).find('.front').addClass('ramjet-hidden');
	}, 150);
	$('#' + outcome.index).find('.back').addClass(outcome.type).append('<p class="text-center">' + outcome.type + '</p>');
	setTimeout(function() {
		$('#' + outcome.index).find('p').addClass('entered');
	}, 300);

	return deferred.promise;
};
