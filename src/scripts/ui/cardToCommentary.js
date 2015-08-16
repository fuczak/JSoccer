var $ = require('jquery');
var ramjet = require('ramjet');
var q = require('q');

module.exports = function(index, type, text) {
	var deferred = q.defer();
	var a = document.getElementById(index);
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
		  duration: 600,
		  easing: ramjet.easeInOut
		});
		$('#' + index).addClass('flipped').find('.back').addClass(type).append('<p class="text-center">' + type + '</p>');
		// a.classList.add('ramjet-hidden');
	}, 150);

	return deferred.promise;
};
