var helpers = require('./helpers');
var $ = require('jquery');
var player = require('./player');
var cpu = require('./cpu');
var playerTeam;
var cpuTeam;

var teams = {
  prepare: prepare,
  setPlayerTeam: setPlayerTeam,
  getPlayerTeam: getPlayerTeam,
  setCpuTeam: setCpuTeam,
  getCpuTeam: getCpuTeam
};

function prepare() {
  teamlist.forEach(function(e) {
    $('#teamlist').append(paintNode(e));
  });
}

function setPlayerTeam(e) {
  var index = teamlist.map(function(e) { return e.id; }).indexOf(e);
  playerTeam = teamlist[index];
  player.setTeam(playerTeam);
}

function getPlayerTeam() {
  return playerTeam;
}

function setCpuTeam() {
  var index = helpers.random(0, teamlist.length - 1);
  if (index === teamlist.indexOf(getPlayerTeam())) {
    return setCpuTeam();
  } else {
    cpuTeam = teamlist[index];
    cpu.setTeam(cpuTeam);
    return paintNode(cpuTeam).innerHTML;
  }
}

function getCpuTeam() {
  return cpuTeam;
}

function paintNode(e) {
  var node = document.createElement('div');
  var image = document.createElement('img');
  var text = document.createTextNode(e.id);
  image.src = 'images/flags/' + e.name + '.png';
  image.classList.add('img-responsive', 'flag-img');
  node.classList.add('flag', 'text-center', 'col-xs-3', 'col-md-1');
  node.appendChild(image);
  node.appendChild(text);
  return node;
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
