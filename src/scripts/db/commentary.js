var template = require('lodash/string/template');

module.exports = [
  {
    type: 'Goal',
    success: true,
    text: [
      template('What a beautiful goal by <%= aTeam %>! <%= dTeam %> will now resume the match.')
    ]
  }
];
