var $ = require('jquery');

// var subButtonGroup = $('#subButtons');
// var mentalityButtonGroup = $('#mentalityButtons');

module.exports = function() {
	// var isBlocked = mentalityButtonGroup.prop('data-toggle') === '';
	// if (isBlocked) {
	// 	mentalityButtonGroup.prop('data-toggle', 'buttons');
	// } else {
	// 	mentalityButtonGroup.prop('data-toggle', '');
	// }
	// $.each(mentalityButtonGroup.find('.btn'), function(i, e) {
	// 	$(e).toggleClass('disabled');
	// });
	// $.each(subButtonGroup.find('.btn'), function(i, e) {
	// 	$(e).toggleClass('disabled');
	// });

	$('#sidebarBlock').toggleClass('sidebar-block');
};
