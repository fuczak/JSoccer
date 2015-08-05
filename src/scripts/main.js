// Workaround to make bootstrap js work correctly
window.jQuery = require('jquery');
require('bootstrap-sass');

var setup = require('./setup.js');

setup();
