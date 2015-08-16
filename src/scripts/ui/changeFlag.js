var $ = require('jquery');

module.exports = function(flag) {
  $('.card .front').css('background-image', 'url("images/flags/' + flag + '.png")');
};
