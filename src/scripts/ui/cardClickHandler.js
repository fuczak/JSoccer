var $ = require('jquery');
var engine = require('../engine/index');

module.exports = function(e) {
	// Return if card has been already clicked
	if ($(this).hasClass('ramjet-hidden')) return;
	engine.handleCardClick(e);
};
