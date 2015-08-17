var random = require('lodash/number/random');
var filter = require('lodash/collection/filter');
var commentary = require('../db/commentary');

module.exports = function(type, shouldContinue, attackingTeam, defendingTeam) {
  var compiled = commentary[0].text[0];

  return compiled({ 'aTeam': attackingTeam.name, 'dTeam': defendingTeam.name });
};
