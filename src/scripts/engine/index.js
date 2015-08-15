var random = require('lodash/number/random');
var evaluateOutcome = require('./evaluateOutcome');
var uiInit = require('../ui/init');
var outcomes = require('../outcomes');
var uiGenerateCards = require('../ui/generateCards');
var uiMakeCommentary = require('../ui/makeCommentary');
var uiShowHalftimeSplash = require('../ui/showHalftimeSplash');
var uiShowFullTimeSplash = require('../ui/showFulltimeSplash');
var uiUpdateEnergyBar = require('../ui/updateEnergyBar');
var cardToCommentary = require('../ui/cardToCommentary');
var uiBlockInput = require('../ui/blockInput');
var player = require('../player');
var cpu = require('../cpu');


var _state = {};

var engine = {
  init: init,
  handleCardClick: handleCardClick
};

function init() {
  uiMakeCommentary('Let\'s see how the coin toss goes.');
  uiInit(makeSub, changeMentality).then(function(playerStarts) {
    outcomes.generate();
    uiMakeCommentary('Someone will start the game.');
    uiGenerateCards(handleCardClick);
    _state = {
      player: player.getTeam(),
      cpu: cpu.getTeam(),
      evaluating: false,
      shouldContinue: false,
      isFirstHalf: true
    };
    console.log(_state);
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
      _state.player.energy -= evaluated.lostEnergy;
      uiUpdateEnergyBar(_state.player.energy);
      _state.evaluating = false;
      if (evaluated.isWhistle) return handleWhistle();
      if (!evaluated.shouldContinue) handleCardClick();
    });
  } else {
    uiBlockInput();
    _state.evaluating = true;
    setTimeout(function() {
      evaluated = evaluateOutcome(_state);
      cardToCommentary(evaluated.index, evaluated.text).then(function() {
        uiBlockInput();
        _state.evaluating = false;
        if (evaluated.isWhistle) return handleWhistle();
        if (evaluated.shouldContinue) handleCardClick();
      });
    }, 1200);
  }
}

function makeSub() {
  uiUpdateEnergyBar(_state.player.energy += random(8, 15));
}

function changeMentality(value) {
  _state.player.mentality = value;
  console.log(_state.player.mentality);
}

function handleWhistle() {
  if (_state.isFirstHalf) {
    uiUpdateEnergyBar(_state.player.energy += random(25, 35));
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
