var delegate = require('./delegate');
var evaluateOutcome = require('./evaluateOutcome');
var tactics = require('../tactics');
var outcomes = require('../outcomes');

var _state = {};

var _api = {
  // Pass current state to the eval outcome function
  evaluateOutcome: evaluateOutcome.bind(null, _state),
  makeSub: tactics.makeSub
};

var engine = {
  init: init,
  getState: getState,
  delegate: delegate.bind(_api),
};

function init() {
  outcomes.generate();
  _state.evaluating = false;
  _state.isPlayerTurn = true;
}

function getState() {
  return _state;
}

module.exports = engine;
