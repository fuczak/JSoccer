var $ = require('jquery');
var ramjet = require('ramjet');

module.exports = function(index, outcome) {
	var a = document.getElementById(index);
	var b = document.getElementById('commentary');

	b.classList.remove('ramjet-hidden');
	ramjet.transform(a, b, {
	  done: function() {
	    b.classList.remove('ramjet-hidden');
	    b.textContent = outcome;
	  },
	  duration: 600,
	  easing: ramjet.easeInOut
	});
	a.classList.add('ramjet-hidden');
};
