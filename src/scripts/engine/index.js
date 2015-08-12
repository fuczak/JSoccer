var evaluateOutcome = require('./evaluateOutcome');
var outcomes = require('../outcomes');
// var blockTacticButtons = require('../ui/blockTacticButtons');
var uiGenerateCards = require('../ui/generateCards');
var cardToCommentary = require('../ui/cardToCommentary');


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
  _state.isFirstHalf = true;
  uiGenerateCards(handleCardClick);
}

function handleCardClick(e) {
  // Prevent player from clicking on card during cpu turn
  if (_state.evaluating) return;
  // If 'e' is passed as an argument it means it's a player turn
  if (e) {
    _state.evaluating = true;
    evaluated = evaluateOutcome(_state, e);
    cardToCommentary(evaluated.index, evaluated.text).then(function() {
      _state.evaluating = false;
      if (evaluated.isWhistle) return handleWhistle();
      if (!evaluated.shouldContinue) handleCardClick();
    });
  } else {
    // blockTacticButtons();
    _state.evaluating = true;
    setTimeout(function() {
      evaluated = evaluateOutcome(_state);
      cardToCommentary(evaluated.index, evaluated.text).then(function() {
        _state.evaluating = false;
        if (evaluated.isWhistle) return handleWhistle();
        if (evaluated.shouldContinue) handleCardClick();
      });
    }, 1200);
  }
}

function handleWhistle() {
  if (!_state.isFirstHalf) return alert('Game over!');
  uiGenerateCards(handleCardClick);
  outcomes.generate();
  console.log(_state.evaluating);
  _state.isFirstHalf = false;
}

module.exports = engine;
