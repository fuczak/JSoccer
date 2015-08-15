var $ = require('jquery');

module.exports = function () {
	if ($(window).innerWidth() > 992) {
		$('.sidebar').find('.sidebar-btn').removeClass('btn-group').addClass('btn-group-vertical');
		$('.remaining').css('display', 'block');
	} else {
		$('.sidebar').find('.sidebar-btn').removeClass('btn-group-vertical').addClass('btn-group');
		$('.remaining').css('display', 'inline-block');
	}
};
