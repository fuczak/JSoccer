// Workaround to make bootstrap js work correctly
var $ = window.jQuery = require('jquery');
require('bootstrap-sass');
var setup = require('./setup.js');

$(document).ready(function() {
	setup();
});
