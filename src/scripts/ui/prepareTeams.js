var $ = require('jquery');
var paintTeamNode = require('./paintTeamNode');
var teams = require('../teams');

module.exports = function() {
	var teamlist = teams.getTeamlist();
	$('#teamlist').html('')
	teamlist.forEach(function(e) {
    	$('#teamlist').append(paintTeamNode(e));
	});
};
