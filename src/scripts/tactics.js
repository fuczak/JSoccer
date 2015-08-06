var $ = require('jquery');

var tactics = {
  makeSub: makeSub
};

function makeSub(e) {
  $(e.target).addClass('disabled');
}

module.exports = tactics;
