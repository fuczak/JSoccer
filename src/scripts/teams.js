var find = require('lodash/collection/find');
var shuffle = require('lodash/collection/shuffle');
var filter = require('lodash/collection/filter');
var teamlist = require('./db/teamlist.js');

var teams = {
  getTeam: getTeam,
  getTeamForCpu: getTeamForCpu,
  getTeamlist: getTeamlist
};

function getTeam(id) {
  return find(teamlist, function(chr) {
    return chr.id === id;
  });
}

function getTeamForCpu(id) {
  return shuffle(teamlist.filter(function(e, i) {
    return e.id !== id;
  }))[0];
}

function getTeamlist() {
  return teamlist;
}

module.exports = teams;
