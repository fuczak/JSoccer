var $ = require('jquery');
var random = require('lodash/number/random');
var animating = false;

module.exports = function(handleCardClick) {
	var cardContainer = $('#pitch .row');
	cardContainer.html('');
	for (var i = 0; i < 24; i++) {
	  cardContainer.append('<div class="col-xs-3 col-md-2 card card-hidden" id="' + i + '"><div class="front">JSoccer</div><div class="back"></div></div>');
	}
	$.each(cardContainer.find('.card'), function(i, e) {
		setTimeout(function() {
			$(e).removeClass('card-hidden');
		}, random(150, 300));
	});
	$('.card').on('click', function() {
		// Return if card has been already clicked
		if ($(this).hasClass('flipped')) return;
		// Respond to user clicks only after one second since last click
		if (!animating) {
			animating = true;
			handleCardClick($(this).prop('id'));
			setTimeout(function() {
				animating = false;
			}, 1000);
		}
	});
};
