var $ = require('jquery');
var ramjet = require('ramjet');

var handler = function cardToCommentary(e) {
	if ($(this).hasClass('ramjet-hidden')) return;
	var a = e.target;
	var b = document.getElementById('commentary');

	b.classList.remove('ramjet-hidden');
	ramjet.transform(a, b, {
	  done: function() {
	    b.classList.remove('ramjet-hidden');
	    b.textContent = 'oke';
	  },
	  duration: 600,
	  easing: ramjet.easeInOut
	});
	a.classList.add('ramjet-hidden');
}

module.exports = handler;