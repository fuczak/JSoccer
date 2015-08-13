var $ = require('jquery');

var helpers = {
  random: random,
  getTacticCoef: getTacticCoef
};

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTacticCoef(input) {
  return 1 - 1/input;
}

module.exports = helpers;
