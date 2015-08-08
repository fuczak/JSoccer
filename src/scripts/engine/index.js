var init = require('./init');
var delegate = require('./delegate');
var tactics = require('../tactics');
var outcomes = require('../outcomes');

var state = {};

var api = {
  getOutcome: outcomes.getOutcome
};

var engine = {
  init: init,
  delegate: delegate.bind(api)
};

module.exports = engine;
