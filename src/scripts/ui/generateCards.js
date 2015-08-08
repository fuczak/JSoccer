var $ = require('jquery');

module.exports = function() {
	for (var i = 0; i < 24; i++) {
	  $('#pitch').find('.row').append('<div class="col-xs-3 col-md-2 card" id="' + i + '"></div>');
	}
};
