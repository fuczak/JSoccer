var $ = require('jquery');
var q = require('q');

module.exports = function() {
  var deferred = q.defer();

  $('#fulltime').removeClass('main-splash-hide');
  $('#fulltime').find('.btn').on('click', function() {
    $('#fulltime').addClass('main-splash-hide');
    deferred.resolve();
  });

  return deferred.promise;
};
