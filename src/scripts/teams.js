var find = require('lodash/collection/find');
var shuffle = require('lodash/collection/shuffle');
var filter = require('lodash/collection/filter');

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

// function setCpuTeam() {
//   var index = helpers.random(0, teamlist.length - 1);
//   if (index === teamlist.indexOf(getPlayerTeam())) {
//     return setCpuTeam();
//   } else {
//     cpuTeam = teamlist[index];
//     cpu.setTeam(cpuTeam);
//     return paintNode(cpuTeam).innerHTML;
//   }
// }

// function getCpuTeam() {
//   return cpuTeam;
// }

function getTeamlist() {
  return teamlist;
}

var teamlist = [
  {
    id: 'PL',
    name: 'Poland',
    skill: {
      attack: 100,
      midfield: 100,
      defense: 100
    }
  },
  {
    id: 'DE',
    name: 'Germany',
    skill: {
      attack: 50,
      midfield: 50,
      defense: 50
    }
  },
  {
    id: 'BR',
    name: 'Brazil',
    skill: {
      attack: 50,
      midfield: 50,
      defense: 50
    }
  },
  {
    id: 'US',
    name: 'United-States-of-America',
    skill: {
      attack: 50,
      midfield: 50,
      defense: 50
    }
  }
];

module.exports = teams;
