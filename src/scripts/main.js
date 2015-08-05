// Workaround to make bootstrap js work correctly
window.jQuery = require('jquery');
require('bootstrap-sass');

var intro = require('./intro.js');
var select = require('./selectors');
intro();


select.confirmTactic.addEventListener('click', function(e) {
	e.preventDefault();
	select.tacticSetup.classList.add('tactic-setup-hide');
});