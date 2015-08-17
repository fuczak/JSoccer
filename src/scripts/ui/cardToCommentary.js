var $ = require('jquery');
var ramjet = require('ramjet');
var q = require('q');

module.exports = function(index, type, text) {
	var deferred = q.defer();
	var a = $('#' + index).find('.front')[0];
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
		$('#' + index).find('.back').addClass(type).append('<p class="text-center">' + type + '</p>');
		$('#' + index).find('.front').addClass('ramjet-hidden');
		setTimeout(function() {
			$('#' + index).find('p').addClass('entered');
		}, 200);
	}, 150);

	return deferred.promise;
};
