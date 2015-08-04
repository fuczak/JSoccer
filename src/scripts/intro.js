var teams = require('./teams');
var select = require('./selectors');
var ramjet = require('ramjet');

function handler(e) {

	// Set target correctly even if user clicks on flag
	var target;
	if (e.target.classList.contains('flag')) {
		target = e.target;
	} else if (e.target.classList.contains('flag-img')) {
		target = e.target.parentNode;
	} else {
		return;
	}

	// Set user team and paint it to scoreboard
	teams.setPlayerTeam(target.textContent);
	select.userTeam.innerHTML = target.innerHTML;

	// Set CPU team and paint it to scoreboard
	select.cpuTeam.innerHTML = teams.setCpuTeam().innerHTML;

	// Ramjet transformation
	// select.userTeam.classList.remove('ramjet-hidden');
	// ramjet.transform(target, select.userTeam, {
	// 	done: function() {
	// 		select.userTeam.classList.remove('ramjet-hidden');
	// 		select.overlay.classList.add('overlay-hide');
	// 	},
	// 	duration: 300
	// });
	// target.classList.add('ramjet-hidden');
	// select.userTeam.classList.add('ramjet-hidden');

	// Move overlay out of the way
	select.overlay.classList.add('overlay-hide');

	// Event listener is no longer needed after setup
	select.overlay.removeEventListener('click', handler);
}

function init() {
  teams.prepare();
  select.overlay.addEventListener('click', handler);
}

module.exports = init;
