module.exports = function(fn, params) {
	if (typeof this[fn] === 'function') return this[fn].call(null, params);
};
