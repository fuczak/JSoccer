var $ = require('jquery');
var animating = false;

module.exports = function(handleCardClick) {
	var cardContainer = $('#pitch .row');
	cardContainer.html('');
	for (var i = 0; i < 24; i++) {
	  cardContainer.append('<div class="col-xs-3 col-md-2 card" id="' + i + '"></div>');
	}	
	$('.card').on('click', function(e) {
		// Return if card has been already clicked
		if ($(this).hasClass('ramjet-hidden')) return;
		// Respond to user clicks only after one second since last click
		if (!animating) {
			animating = true;
			handleCardClick(e);
			setTimeout(function() {
				animating = false;
			}, 1000);
		}
	});
};
