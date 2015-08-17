var random = require('lodash/number/random');
var find = require('lodash/collection/find');
var commentary = require('../db/commentary');

module.exports = function(type, shouldContinue, isSuccess, attackingTeam, defendingTeam) {
  var commentaryByType = find(commentary, function(e) {
    return e.type === type;
  });

  console.log(commentaryByType);

  // return compiled({ 'aTeam': attackingTeam.name, 'dTeam': defendingTeam.name });
  return 'ok';
};
