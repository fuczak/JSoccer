var evaluateOutcome = require('./evaluateOutcome');
var outcomes = require('../outcomes');
var blockTacticButtons = require('../ui/blockTacticButtons');

var _state = {};

var engine = {
  init: init,
  handleCardClick: handleCardClick
};

function init() {
  outcomes.generate();
  _state.evaluating = false;
  _state.isPlayerTurn = true;
  _state.shouldContinue = false;
}

function handleCardClick(e) {
  // Throttle player input
  if (_state.evaluating) return;
  // If 'e' is passed as an argument it means it's a player turn
  if (e) {
    _state.evaluating = true;
    evaluated = evaluateOutcome(_state, e);    
    _state.evaluating = false;
    if (evaluated.isWhistle) return alert('Whistle!');
    if (!evaluated.shouldContinue) handleCardClick();
  } else {
    // blockTacticButtons();
    _state.evaluating = true;
    setTimeout(function() {
      evaluated = evaluateOutcome(_state);
      _state.evaluating = false;
      if (evaluated.isWhistle) return alert('Whistle!');
      if (evaluated.shouldContinue) handleCardClick();
    }, 2000);
  }
}

module.exports = engine;
