module.exports = function(e) {
	var node = document.createElement('div');
	var image = document.createElement('img');
	var text = document.createTextNode(e.id);
	image.src = 'images/flags/' + e.flag + '.png';
	image.classList.add('img-responsive', 'flag-img');
	node.classList.add('flag', 'text-center', 'col-xs-3', 'col-md-1');
	node.appendChild(image);
	node.appendChild(text);
	return node;
};
