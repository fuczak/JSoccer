var select = require('./selectors');
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
    var node = document.createElement('div');
    var image = document.createElement('img');
    var text = document.createTextNode(e.id);
    image.src = 'images/flags/' + e.name + '.png';
    image.classList.add('img-responsive', 'flag-img');
    node.classList.add('flag', 'text-center', 'col-xs-3', 'col-md-1');
    node.appendChild(image);
    node.appendChild(text);
    select.teamlist.appendChild(node);
  });
}

function setPlayerTeam(e) {
  var index = teamlist.map(function(e) { return e.id; }).indexOf(e);
  playerTeam = teamlist[index];
  console.log(playerTeam);
}

function getPlayerTeam() {
  return playerTeam;
}

function setCpuTeam() {
  // todo
}

function getCpuTeam() {
  // todo
}

var teamlist = [
  {
    id: 'PL',
    name: 'Poland',
    skill: 70
  },
  {
    id: 'DE',
    name: 'Germany',
    skill: 90
  },
  {
    id: 'BR',
    name: 'Brazil',
    skill: 80
  },
  {
    id: 'US',
    name: 'United-States-of-America',
    skill: 60
  }
];

module.exports = teams;
