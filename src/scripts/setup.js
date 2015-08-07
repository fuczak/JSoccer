var teams = require('./teams');
var player = require('./player');
var cpu = require('./cpu');
var engine = require('./engine');
var helpers = require('./helpers');
var ui = require('./ui/index');
var $ = require('jquery');

function setTactics(e) {
	e.preventDefault();
	var formation = $('#formation .active input').val();
	var mentality = $('#mentality .active input').val();
	player.setTactics(formation, mentality);
	cpu.setTactics(formation, mentality);
	$('#tacticSetup').addClass('tactic-hide');
	$('#infoBar').removeClass('tactic-hide');
}

function init() {
	ui.init();
	$('#confirmTactic').on('click', setTactics);
	engine.init();
}

module.exports = init;
