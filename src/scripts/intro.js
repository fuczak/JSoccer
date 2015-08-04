var teams = require('./teams');
var select = require('./selectors');
var ramjet = require('ramjet');

function handler(e) {
	if (e.target.classList.contains('flag')) {
		select.userTeam.classList.remove('ramjet-hidden');
		select.userTeam.innerHTML = e.target.innerHTML;
		ramjet.transform(e.target, select.userTeam, {
			done: function() {
				select.userTeam.classList.remove('ramjet-hidden');
				select.overlay.classList.add('overlay-hide');
			},
			duration: 300
		});	
		e.target.classList.add('ramjet-hidden');
		select.userTeam.classList.add('ramjet-hidden');		
		select.overlay.removeEventListener('click', handler);
	}
}

function init() {
  select.overlay.addEventListener('click', handler);  
}

module.exports = init;
