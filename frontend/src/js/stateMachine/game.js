const gameStates = {
  initial: 's0',
  states: {
    s0: {
      onEntry: ['log', 'incrementTurn', 'renderBoard'],
      on: {
        CLICK_ON_CARD: 's1',
      },
    },
    s1: {
      onEntry: ['log', 'selectCard', 'renderBoard'],
      on: {
        CLICK_ON_CARD: {
          target: 's2',
          cond: 'notSelected',
        },
      },
    },
    s2: {
      onEntry: ['log', 'selectCard', 'setFaceUp', 'renderBoard'],
      after: {
        1000: 'endTurn',
      },
      onExit: ['deselectCards', 'setFaceUp'],
    },
    endTurn: {
      onEntry: ['log'],
      on: {
        '': [
          { target: 'endGame', cond: 'allFound' },
          { target: 's0' },
        ],
      },
    },
    endGame: {
      type: 'final',
      onEntry: ['log', 'logEnd'],
    },
  },
};

export default gameStates;
