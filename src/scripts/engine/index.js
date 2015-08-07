var init = require('./init');
var delegate = require('./delegate');
var tactics = require('../tactics');

var state = {};

var api = {
  makeSub: tactics.makeSub
}

var engine = {
  init: init,
  delegate: delegate.bind(api)
};

module.exports = engine;