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
  console.log(e, _state);
  // Throttle player input
  if (_state.evaluating) return;
  if (e) {
    _state.evaluating = true;
    _state.isPlayerTurn = evaluateOutcome(_state, e);
    _state.evaluating = false;
    if (!_state.isPlayerTurn) handleCardClick();
  } else {
    _state.evaluating = true;
    setTimeout(function() {
      _state.isPlayerTurn = evaluateOutcome(_state);
      _state.evaluating = false;
      if (!_state.isPlayerTurn) handleCardClick();
    }, 1000);
  }
}

module.exports = engine;
