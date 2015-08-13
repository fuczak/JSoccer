var $ = require('jquery');
var player = require('../player');
var cpu = require('../cpu');

module.exports = function(e) {
	e.preventDefault();
	var formation = $('#formation .active input').val();
	player.setTactics(formation);
	cpu.setTactics(formation);
	$('#tacticSetup').addClass('tactic-hide');
};
