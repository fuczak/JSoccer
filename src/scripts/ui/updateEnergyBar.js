var $ = require('jquery');

module.exports = function(value) {
  $('.progress-bar').css('width', value + '%');
  if (value < 30) {
    $('.progress-bar').removeClass('progress-bar-info').addClass('progress-bar-danger');
  } else if (value < 60) {
    $('.progress-bar').removeClass('progress-bar-warning').addClass('progress-bar-warning');
  }
};
