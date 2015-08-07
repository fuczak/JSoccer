var teams = require('./teams');
var player = require('./player');
var cpu = require('./cpu');
var engine = require('./engine');
var helpers = require('./helpers');
var ui = require('./ui/index');
var $ = require('jquery');

function init() {
	ui.init();
	engine.init();
}

module.exports = init;
