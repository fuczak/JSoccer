var evaluateOutcome = require('./evaluateOutcome');
var outcomes = require('../outcomes');

var _state = {};

var engine = {
  init: init,
  handleCardClick: handleCardClick
};

function init() {
  outcomes.generate();
  _state.evaluating = false;
  _state.isPlayerTurn = true;
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
