var $ = require('jquery');

var helpers = {
  random: random,
  arrangeButtons: arrangeButtons
};

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrangeButtons() {
	if ($(window).innerWidth() > 992) {
		$('.sidebar').find('div').removeClass('btn-group').addClass('btn-group-vertical');
		$('.remaining').css('display', 'block');
	} else {
		$('.sidebar').find('div').removeClass('btn-group-vertical').addClass('btn-group');
		$('.remaining').css('display', 'inline-block');
	}
}

module.exports = helpers;
