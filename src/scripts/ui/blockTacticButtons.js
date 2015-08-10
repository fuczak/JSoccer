var $ = require('jquery');

var subButtonGroup = $('#subButtons');
var mentalityButtonGroup = $('#mentalityButtons');

module.exports = function() {
	var isBlocked = mentalityButtonGroup.attr('data-toggle') === '';
	if (isBlocked) {
		mentalityButtonGroup.attr('data-toggle', 'buttons');
	} else {
		mentalityButtonGroup.attr('data-toggle', '');
	}
	$.each(mentalityButtonGroup.find('.btn'), function(i, e) {
		$(e).toggleClass('disabled');		
	});
	$.each(subButtonGroup.find('.btn'), function(i, e) {
		$(e).toggleClass('disabled');
	})
}