var $ = require('jquery');

module.exports = function () {
	if ($(window).innerWidth() > 992) {
		$('.sidebar').find('div').removeClass('btn-group').addClass('btn-group-vertical');
		$('.remaining').css('display', 'block');
	} else {
		$('.sidebar').find('div').removeClass('btn-group-vertical').addClass('btn-group');
		$('.remaining').css('display', 'inline-block');
	}
}