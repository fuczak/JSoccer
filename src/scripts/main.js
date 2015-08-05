// Workaround to make bootstrap js work correctly
window.jQuery = require('jquery');
require('bootstrap-sass');

var intro = require('./intro.js');
var select = require('./selectors');
intro();


// select.tacticSetup.addEventListener('click', function(e) {
// 	this.classList.add('tactic-setup-hide');
// });