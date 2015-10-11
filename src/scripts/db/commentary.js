var template = require('lodash/string/template');

module.exports = [
  {
    type: "Goal",
    isSuccess: {
      shouldStop: [
        template("What a beautiful goal by <%= aTeam %>! <%= dTeam %> will now resume the match."),
        template("It's there, <%= aTeam %> scores! <%= dTeam %> goalkeeper left with no chance!"),
        template("Scored by <%= aTeam %>! Clinical finishing! <%= dTeam %> kicks off.")
      ]
    }
  },
  {
    type: "Chance",
    isSuccess: {
      shouldStop: [
        template("A chance turned into a goal. Great play by <%= aTeam %>. <%= dTeam %> will restart the match."),
        template("Superb finish by <%= aTeam %>. The <%= dTeam %> defenders were caught at sixes and sevens!")
      ]
    },
    isFailure: {
      shouldStop: [
        template("<%= aTeam %> wasted a great chance. The ball is now in <%= dTeam %>'s posession"),
        template("An opportunity for <%= aTeam %> to go in front is blown. Terrible finish! <%= dTeam %> restarts.")
      ],
      shouldContinue: [
        template("<%= aTeam %> hits the post! But they get the ball back, what a chance!"),
        template("Oh dear Oh dear! What a miss... But <%= aTeam %> gets to the loose ball first!")
      ]
    }
  },
  {
    type: "Pass",
    isSuccess: {
      shouldContinue: [
        template("A very precise pass by <%= aTeam %>, great build-up"),
        template("<%= aTeam %> retains possession with a low pass down the left flank."),
        template("<%= aTeam %> retains possession with a low pass down the right flank."),
        template("<%= aTeam %> plays the ball down the right side."),
        template("<%= aTeam %> plays the ball down the left side."),
        template("<%= aTeam %> moves the ball forward."),
        template("<%= aTeam %> hits the ball forward."),
        template("<%= aTeam %> plays the ball square looking for the opening."),
        template("<%= aTeam %> builds down the left with an excellent pass."),
        template("<%= aTeam %> builds down the right with an excellent pass.")

      ]
    },
    isFailure: {
      shouldStop: [
        template("<%= aTeam %>'s pass intercepted by <%= dTeam %>."),
        template("A very poor pass by <%= aTeam %>. <%= dTeam %> intercepts."),
        template("Terrible pass makes it easy for <%= dTeam %> to take over the ball."),
        template("<%= aTeam %> tries to play a long ball forward but it's intercepted!"),
        template("<%= aTeam %> loses the ball. Chance for a counter-attack for <%= dTeam %>")
      ]
    }
  },
  {
    type: "Tackle",
    isSuccess: {
      shouldContinue: [
        template("Foul by <%= dTeam %>. <%= aTeam %> gets a free kick.")
      ]
    },
    isFailure: {
      shouldStop: [
        template("Great tackle by <%= dTeam %>, they get the ball back."),
        template("Solid tackle from <%= dTeam %>, easily dispossessing <%= aTeam %>.")
      ]
    }
  },
  {
    type: "Injury",
    isSuccess: {
      shouldContinue: [
        template("Injury success should continue")
      ]
    },
    isFailure: {
      shouldStop: [
        template("Injury failure should stop")
      ]
    }
  },
  {
    type: "Offside",
    isFailure: {
      shouldStop: [
        template("Offside failure should stop")
      ]
    }
  },
  {
    type: "Penalty",
    isSuccess: {
      shouldStop: [
        template("Penalty success should stop")
      ]
    },
    isFailure: {
      shouldStop: [
        template("Penalty failure should stop")
      ]
    }
  },
  {
    type: "Red Card",
    isFailure: {
      shouldStop: [
        template("Red card failure should stop")
      ]
    }
  },
  {
    type: "Whistle",
    isFailure: {
      shouldStop: [
        template("Whistle event")
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
