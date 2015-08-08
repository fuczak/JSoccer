var init = require('./init');
var delegate = require('./delegate');
var evaluateOutcome = require('./evaluateOutcome');
var tactics = require('../tactics');
var outcomes = require('../outcomes');

var _state = {};

var _api = {
  evaluateOutcome: evaluateOutcome
};

var engine = {
  init: init,
  getState: getState,
  delegate: delegate.bind(_api),
};

function getState() {
  return _state;
}

module.exports = engine;
