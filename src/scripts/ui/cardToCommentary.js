var ramjet = require('ramjet');
var isAnimating;

module.exports = function(index, outcome) {	
	var a = document.getElementById(index);
	var b = document.getElementById('commentary');
	if (!isAnimating) {
		b.children[0].classList.remove('entered');
		setTimeout(function() {
			isAnimating = true;
			b.children[0].textContent = '';	
			b.classList.remove('ramjet-hidden');
			ramjet.transform(a, b, {
			  done: function() {
			   b.children[0].textContent = outcome;	  
			   b.children[0].classList.add('entered'); 
			   b.classList.remove('ramjet-hidden');
			   isAnimating = false;
			  },
			  duration: 600,
			  easing: ramjet.easeInOut
			});
			a.classList.add('ramjet-hidden');	
		}, 150);	
	}
};
