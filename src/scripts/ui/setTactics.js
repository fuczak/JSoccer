var $ = require('jquery');
var player = require('../player');
var cpu = require('../cpu');

module.exports = function(e) {
	e.preventDefault();
	var formation = $('#formation .active input').val();
	var mentality = $('#mentality .active input').val();
	player.setTactics(formation, mentality);
	cpu.setTactics(formation, mentality);
	$('#tacticSetup').addClass('tactic-hide');
	$('#infoBar').removeClass('tactic-hide');
}