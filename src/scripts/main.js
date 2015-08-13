// Workaround to make bootstrap js work correctly
var $ = window.jQuery = require('jquery');
require('bootstrap-sass');
var engine = require('./engine/index');
var arrangeSidebarButtons = require('./ui/arrangeSidebarButtons');

$(document).ready(function() {
	// Init match engine
	engine.init();

	// Arrange sidebar buttons and attach event handler to resize action
	arrangeSidebarButtons();
	$(window).resize(arrangeSidebarButtons);
});
