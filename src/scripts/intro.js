var teams = require('./teams')

function init() {
  var overlay = document.getElementsByClassName('overlay')[0];

  overlay.addEventListener('click', function(e) {
  	this.classList.toggle('overlay-hide');
  });
}

module.exports = init;
