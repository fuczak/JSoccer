var $ = require('jquery');

module.exports = function () {
	if ($(window).innerWidth() > 992) {
		$('.sidebar').removeClass('hidden').find('.sidebar-btn').removeClass('btn-group').addClass('btn-group-vertical');
		$('.remaining').css('display', 'block');
		$('.footer').hide();
		$('#tacticOverlay .col-md-12').children().detach().appendTo($('#tacticSidebar'));
		$('#remainingOverlay .col-md-12').children().detach().appendTo($('#remainingSidebar'));
	} else {
		$('.sidebar').addClass('hidden').find('.sidebar-btn').removeClass('btn-group-vertical').addClass('btn-group');
		$('.remaining').css('display', 'inline-block');
		$('.footer').show();
		$('#tacticSidebar').children().detach().appendTo($('#tacticOverlay .col-md-12'));
		$('#remainingSidebar').children().detach().appendTo($('#remainingOverlay .col-md-12'));
	}
};
