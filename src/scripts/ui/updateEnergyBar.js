var $ = require('jquery');

module.exports = function(value) {
  $('.progress-bar').css('width', value + '%');
  if (value < 30) {
    $('.progress-bar').removeClass().addClass('progress-bar progress-bar-danger');
  } else if (value < 60) {
    $('.progress-bar').removeClass().addClass('progress-bar progress-bar-warning');
  } else if (value > 60) {
  	$('.progress-bar').removeClass().addClass('progress-bar progress-bar-info');
  }
};
