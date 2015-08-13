var $ = require('jquery');
var q = require('q');

module.exports = function() {
  var deferred = q.defer();

  $('#pitch-halftime').removeClass('pitch-overlay-hidden');
  $('#pitch-halftime').find('.btn').on('click', function() {
    $('#pitch-halftime').addClass('pitch-overlay-hidden');
    deferred.resolve();
  });

  return deferred.promise;
};
