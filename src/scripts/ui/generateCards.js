var $ = require('jquery');

module.exports = function() {
	console.log('init generate');
	var cardContainer = $('#pitch .row');
	cardContainer.html('');
	for (var i = 0; i < 24; i++) {
	  cardContainer.append('<div class="col-xs-3 col-md-2 card" id="' + i + '"></div>');
	}
};
