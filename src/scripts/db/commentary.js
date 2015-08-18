var template = require('lodash/string/template');

module.exports = [
  {
    type: 'Goal',
    isSuccess: {
      shouldStop: [
        template('What a beautiful goal by <%= aTeam %>! <%= dTeam %> will now resume the match.')
      ]
    }
  },
  {
    type: 'Chance',
    isSuccess: {
      shouldStop: [
        template('Chance turned into a goal. Great play by <%= aTeam %>. <%= dTeam %> will restart the match.')
      ]
    },
    isFailure: {
      shouldStop: [
        template('<%= aTeam %> wasted a great chance. The ball is now in <%= dTeam %>\'s posession')
      ],
      shouldContinue: [
        template('<%= aTeam %> hits the post! But they get the ball back, what a chance!')
      ]
    }
  },
  {
    type: 'Pass',
    isSuccess: {
      shouldContinue: [
        template('A very precise pass by <%= aTeam %>, great build-up')
      ]
    },
    isFailure: {
      shouldStop: [
        template('<%= aTeam %>\'s pass intercepted by <%= dTeam %>.')
      ]
    }
  },
  {
    type: 'Tackle',
    isSuccess: {
      shouldContinue: [
        template('Foul by <%= dTeam %>. <%= aTeam %> gets a free kick.')
      ]
    },
    isFailure: {
      shouldStop: [
        template('Great tackle by <%= dTeam %>, they get the ball back.')
      ]
    }
  },
  {
    type: 'Injury',
    isSuccess: {
      shouldContinue: [
        template('Injury success should continue')
      ]
    },
    isFailure: {
      shouldStop: [
        template('Injury failure should stop')
      ]
    }
  },
  {
    type: 'Offside',
    isFailure: {
      shouldStop: [
        template('Offside failure should stop')
      ]
    }
  },
  {
    type: 'Penalty',
    isSuccess: {
      shouldStop: [
        template('Penalty success should stop')
      ]
    },
    isFailure: {
      shouldStop: [
        template('Penalty failure should stop')
      ]
    }
  },
  {
    type: 'Red Card',
    isFailure: {
      shouldStop: [
        template('Red card failure should stop')
      ]
    }
  },
  {
    type: 'Whistle',
    isFailure: {
      shouldStop: [
        template('Whistle event')
      ]
    }
  }
];

/**
  * Goal -> isSuccess + shouldStop
  * Chance -> isSuccess + shouldStop, isFailure + shouldStop, isFailure + shouldContinue
  * Pass -> isSuccess + shouldContinue, isFailure + shouldStop
  * Tackle -> isSuccess + shouldContinue, isFailure + shouldStop
  * Injury -> isSuccess + shouldContinue, isFailure + shouldStop
  * Offside -> isFailure + shouldStop
  * Penalty -> isSuccess + shouldStop, isFailure + shouldStop (special?)
  * Red Card -> isFailure + shouldStop
  * Whistle -> special
  */
