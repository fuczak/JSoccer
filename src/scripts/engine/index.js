var evaluateOutcome = require('./evaluateOutcome');
var uiInit = require('../ui/init');
var outcomes = require('../outcomes');
var uiGenerateCards = require('../ui/generateCards');
var uiMakeCommentary = require('../ui/makeCommentary');
var uiShowHalftimeSplash = require('../ui/showHalftimeSplash');
var uiShowFullTimeSplash = require('../ui/showFulltimeSplash');
var cardToCommentary = require('../ui/cardToCommentary');
var player = require('../player');
var cpu = require('../cpu');


var _state = {};

var engine = {
  init: init,
  handleCardClick: handleCardClick
};

function init() {
  uiMakeCommentary('Let\'s see how the coin toss goes.');
  uiInit().then(function(playerStarts) {
    uiMakeCommentary('Someone will start the game.');
    outcomes.generate();
    uiGenerateCards(handleCardClick);
    _state = {
      player: player.getTeam(),
      cpu: cpu.getTeam(),
      evaluating: false,
      shouldContinue: false,
      isFirstHalf: true
    };
    console.log(_state);
    if (!playerStarts) handleCardClick();
  });

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
    }, 10);
  }
}

function handleWhistle() {
  if (_state.isFirstHalf) {
    uiShowHalftimeSplash().then(function() {
      _state.isFirstHalf = false;
      uiGenerateCards(handleCardClick);
      outcomes.generate();
    });
  } else {
    uiShowFullTimeSplash().then(function() {
      init();
    });
  }
}

module.exports = engine;
