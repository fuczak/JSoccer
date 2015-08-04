var select = require('./selectors');

var teams = {
  prepareTeams: prepareTeams
};

function prepareTeams() {
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
