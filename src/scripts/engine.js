var $ = require('jquery');
var ramjet = require('ramjet');
var tactics = require('./tactics');

var state = {};

var api = {
  makeSub: tactics.makeSub
}

var engine = {
  init: init,
  delegate: delegate
};

function init() {
  // set initial state
}

function delegate(fn, params) {
  if (typeof api[fn] === 'function') api[fn].call(null, params);
}

module.exports = engine;
