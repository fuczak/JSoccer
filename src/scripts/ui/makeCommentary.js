var $ = require('jquery');

module.exports = function(commentary) {
  $('#commentary p').removeClass('entered');
  setTimeout(function() {
    $('#commentary p').text(commentary).addClass('entered');
  }, 300);
};
