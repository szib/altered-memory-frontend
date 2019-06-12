const machineConfig = {
  id: 'game',
  initial: 'idle',

  states: {
    idle: {
      onEntry: ['resetContext', 'showLeaderBoard'],
      on: {
        NEW_GAME: 'init',
      },
    },
    init: {
      onEntry: ['askForName', 'initCards', 'shuffleCards'],
      on: {
        '': { target: 'running' },
      },
    },
    running: {
      activities: ['ticking'],
      on: {
        QUIT_GAME: 'idle',
        'done.state.game.running.endGame': 'cleanUp',
      },
      id: 'game',
      initial: 'init',
      states: {
        init: {
          onEntry: ['renderBoard', 'renderScore'],
          on: {
            '': 's0',
          },
        },
        s0: {
          onEntry: ['incrementTurn'],
          on: {
            CLICK_ON_CARD: {
              target: 's1',
              cond: 'selectable',
            },
          },
          onExit: ['playClickSound', 'selectCard', 'setFaceUp', 'renderBoard'],
        },
        s1: {
          on: {
            CLICK_ON_CARD: {
              target: 's2',
              cond: 'selectable',
            },
          },
          onExit: ['playClickSound', 'selectCard', 'setFaceUp', 'renderBoard'],
        },
        s2: {
          onEntry: ['checkMatch'],
          on: {
            CLICK_ON_CARD: 's0',
          },
          after: {
            10: { target: 'endGame', cond: 'allFound' },
            20: { target: 's0', cond: 'isMatched' },
            1000: { target: 's0' },
          },
          onExit: ['deselectCards', 'setFaceUp', 'renderScore', 'renderBoard'],
        },
        endGame: {
          onEntry: ['setFaceUp', 'addTimeBonus', 'renderScore', 'sendResultToApi', 'renderBoard'],
          type: 'final',
        },
      },
    },
    cleanUp: {
      after: {
        2000: { target: 'idle' },
      },
    },
  },
};

const gameMachine = Machine(machineConfig)
;