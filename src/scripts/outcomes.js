var helpers = require('./helpers');

var _possibleOutcomes = ['Goal', 'Chance', 'Pass', 'Tackle', 'Injury', 'Offside', 'Penalty', 'Red Card']; // Plus 'Whistle'

var outcomes = {
  generate: generate
};

function generate() {
  console.log('outcomes generates');
}

module.exports = outcomes;
