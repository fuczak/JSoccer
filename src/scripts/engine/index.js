var delegate = require('./delegate');
var evaluateOutcome = require('./evaluateOutcome');
var tactics = require('../tactics');
var outcomes = require('../outcomes');

var $ = require('jquery');

var _state = {};

var engine = {
  init: init,
  getState: getState,
  handleCardClick: handleCardClick
};

function init() {
  outcomes.generate();
  _state.evaluating = false;
  _state.isPlayerTurn = true;
}

function getState() {
  return _state;
}

function handleCardClick(e) {
  _state.isPlayerTurn = evaluateOutcome(_state, e);
  _state.evaluating = true;
  if (!_state.isPlayerTurn) setTimeout(function() {
    cpuMove();
  }, 1000);
  _state.evaluating = false;
}

function cpuMove() {
  handleCardClick();
}

module.exports = engine;
