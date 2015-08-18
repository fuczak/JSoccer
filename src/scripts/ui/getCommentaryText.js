var random = require('lodash/number/random');
var find = require('lodash/collection/find');
var commentary = require('../db/commentary');

module.exports = function(type, shouldContinue, isSuccess, attackingTeam, defendingTeam) {
  var outcomeShouldContinue = shouldContinue ? 'shouldContinue' : 'shouldStop';
  var outcomeIsSuccess = isSuccess ? 'isSuccess' : 'isFailure';
  var commentaryByType = find(commentary, function(e) {
    return e.type === type;
  });  
  var compiledPool = commentaryByType[outcomeIsSuccess][outcomeShouldContinue];
  var compiled = compiledPool[random(0, compiledPool.length - 1)];

  return compiled({ 'aTeam': attackingTeam.name, 'dTeam': defendingTeam.name });
};
