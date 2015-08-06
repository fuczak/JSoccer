var $ = require('jquery');
var ramjet = require('ramjet');
var tactics = require('./tactics');

var engine = {
  init: init
};

function init() {
  for (var i = 0; i < 24; i++) {
    $('#pitch').find('.row').append('<div class="col-xs-3 col-md-2 card"></div>');
  }
  $('.card').on('click', clickHandler);
  $('#subButtons').on('click', tactics.makeSub);
}

function clickHandler(e) {
  if ($(this).hasClass('ramjet-hidden')) return;
  var a = e.target;
  var b = document.getElementById('commentary');

  b.classList.remove('ramjet-hidden');
  ramjet.transform(a, b, {
    done: function() {
      b.classList.remove('ramjet-hidden');
      b.textContent = 'oke';
    },
    duration: 600,
    easing: ramjet.easeInOut
  });
  a.classList.add('ramjet-hidden');
}

module.exports = engine;
