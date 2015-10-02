var random = require('lodash/number/random');
var evaluateOutcome = require('./evaluateOutcome');
var outcomes = require('../outcomes');
var player = require('../player');
var cpu = require('../cpu');
var config = require('../config');
var uiInit = require('../ui/init');
var uiGenerateCards = require('../ui/generateCards');
var uiMakeCommentary = require('../ui/makeCommentary');
var uiShowHalftimeSplash = require('../ui/showHalftimeSplash');
var uiShowFullTimeSplash = require('../ui/showFulltimeSplash');
var uiUpdateEnergyBar = require('../ui/updateEnergyBar');
var uiChangeFlag = require('../ui/changeFlag');
var cardToCommentary = require('../ui/cardToCommentary');
var uiBlockInput = require('../ui/blockInput');

var _state = {};

var engine = {
  init: init,
  handleCardClick: handleCardClick
};

function init() {
  uiBlockInput();
  uiMakeCommentary('Hello and welcome!');
  uiInit(makeSub, changeMentality).then(function() {
    outcomes.generate();
    uiGenerateCards(handleCardClick);
    _state = {
      player: player.getTeam(),
      cpu: cpu.getTeam(),
      evaluating: false,
      shouldContinue: false,
      isFirstHalf: true
    };
    uiMakeCommentary(_state.player.name + ' will start the game (by clicking on one of the cards). Tip: Flags on the cards indicate whose turn it is.');
    uiChangeFlag(_state.player.flag);
    uiBlockInput();
  });

}

function handleCardClick(index) {
  // Prevent player from clicking on card during cpu turn
  if (_state.evaluating) return;
  // If 'e' is passed as an argument it means it's a player turn
  if (index) {
    _state.evaluating = true;
    evaluated = evaluateOutcome(_state, index);
    cardToCommentary(evaluated, _state.player, _state.cpu).then(function() {
      _state.player.energy -= evaluated.lostEnergy;
      uiUpdateEnergyBar(_state.player.energy);
      _state.evaluating = false;
      if (evaluated.isWhistle) return handleWhistle();
      if (!evaluated.shouldContinue) handleCardClick();
    });
  } else {
    uiBlockInput();
    uiChangeFlag(_state.cpu.flag);
    _state.evaluating = true;
    setTimeout(function() {
      evaluated = evaluateOutcome(_state);
      cardToCommentary(evaluated, _state.cpu, _state.player).then(function() {
        uiBlockInput();
        uiChangeFlag(_state.player.flag);
        _state.cpu.energy -= (evaluated.lostEnergy * config.CPU_LOST_ENERGY);
        _state.evaluating = false;
        if (evaluated.isWhistle) return handleWhistle();
        if (evaluated.shouldContinue) handleCardClick();
      });
    }, 1400);
  }
}

function makeSub() {
  restoreEnergy(8, 15);
  switch(_state.player.mentality) {
    case 0:
      outcomes.defensiveSubstitution();
      break;
    case 2:
      outcomes.offensiveSubstitution();
      break;
  }
}

function changeMentality(value) {
  _state.player.mentality = value;
}

function restoreEnergy(lowValue, highValue) {
  console.log(_state.player.energy);
  uiUpdateEnergyBar(_state.player.energy += random(lowValue, highValue));
  if (_state.player.energy > 100) _state.player.energy = 100;
  console.log(_state.player.energy);
}

function handleWhistle() {
  uiBlockInput();
  if (_state.isFirstHalf) {
    restoreEnergy(25, 35);
    uiShowHalftimeSplash().then(function() {
      uiBlockInput();
      uiChangeFlag(_state.cpu.flag);
      _state.isFirstHalf = false;
      uiGenerateCards(handleCardClick);
      outcomes.generate();
      handleCardClick();
    });
  } else {
    setTimeout(function() {
      uiShowFullTimeSplash().then(function() {
        uiBlockInput();
        init();
      });
    }, 1400);
  }
}

module.exports = engine;
