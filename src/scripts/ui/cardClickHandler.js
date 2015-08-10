var $ = require('jquery');
var engine = require('../engine/index');
var animating = false;

module.exports = function(e) {
	// Return if card has been already clicked
	if ($(this).hasClass('ramjet-hidden')) return;
	// Respond to user clicks only after one second since last click
	if (!animating) {
		animating = true;
		engine.handleCardClick(e);
		setTimeout(function() {
			animating = false;
		}, 1000);
	}
};
