var $ = require('jquery');

var helpers = {
  random: random,
  getTacticCoef: getTacticCoef,
  getMentalityCoef: getMentalityCoef
};

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTacticCoef(input) {
  return 1 - 1/input;
}

function getMentalityCoef(input) {
  return input;
}

module.exports = helpers;
