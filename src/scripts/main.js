// Workaround to make bootstrap js work correctly
var $ = window.jQuery = require('jquery');
require('bootstrap-sass');
var engine = require('./engine');
var ui = require('./ui/index');

$(document).ready(function() {
	ui.init();
	engine.init();
});
