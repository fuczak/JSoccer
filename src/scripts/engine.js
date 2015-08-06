var $ = require('jquery');
var ramjet = require('ramjet');

var engine = {
  init: init
};

function init() {
  for (var i = 0; i < 24; i++) {
    $('#pitch').find('.row').append('<div class="col-xs-3 col-md-2 card"><img src="images/flags/Burundi.png"></div>');
  }
  $('.card').on('click', function(e) {
    $(this).css('background-color', 'red');
    var a = e.target;
    var b = document.getElementById('commentary');

    b.classList.remove('ramjet-hidden');
    ramjet.transform(a, b, {
      done: function() {
        b.classList.remove('ramjet-hidden');
      },
      duration: 800,
      easing: ramjet.easeInOut
    });
    a.classList.add('ramjet-hidden');
    b.classList.add('ramjet-hidden');
  });
}

module.exports = engine;
