var $ = require('jquery');
var ramjet = require('ramjet');
var engine = require('../engine/index');

function _cardToCommentary(e, outcome) {
	var a = e.target;
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
}

module.exports = function(e) {
	if ($(this).hasClass('ramjet-hidden')) return;
	var outcome = engine.delegate('evaluateOutcome', e.target.id);
	_cardToCommentary(e, outcome);
};
