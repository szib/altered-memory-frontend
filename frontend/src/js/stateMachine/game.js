const gameStates = {
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
      onEntry: ['logEvent', 'incrementTurn'],
      on: {
        CLICK_ON_CARD: {
          target: 's1',
          cond: 'selectable',
        },
      },
      onExit: ['selectCard', 'setFaceUp', 'renderBoard'],
    },
    s1: {
      onEntry: ['logEvent'],
      on: {
        CLICK_ON_CARD: {
          target: 's2',
          cond: 'selectable',
        },
      },
      onExit: ['selectCard', 'setFaceUp', 'renderBoard'],
    },
    s2: {
      onEntry: ['logEvent', 'checkMatch'],
      on: {
        CLICK_ON_CARD: 's0',
      },
      after: {
        10: { target: 'endGame', cond: 'allFound' },
        20: { target: 's0', cond: 'isMatched' },
        1000: { target: 's0' },
      },
      onExit: ['logCards', 'logContext', 'deselectCards', 'setFaceUp', 'renderScore', 'renderBoard'],
    },
    endGame: {
      onEntry: ['setFaceUp', 'addTimeBonus', 'renderScore', 'renderBoard', 'logEnd'],
      type: 'final',
    },
  },
};

export default gameStates;
