var $ = require('jquery');

var engine = {
  init: init
};

function init() {
  for (var i = 0; i < 24; i++) {
    $('#pitch').find('.row').append('<div class="col-xs-3 col-md-2 card"><img src="images/flags/Burundi.png"></div>');
  }
  $('.card').on('click', function() {
    $(this).css('background-color', 'red');
  });
}

module.exports = engine;
