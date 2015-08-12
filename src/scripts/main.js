// Workaround to make bootstrap js work correctly
var $ = window.jQuery = require('jquery');
require('bootstrap-sass');
var engine = require('./engine/index');

$(document).ready(function() {
	engine.init();
});
