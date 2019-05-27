import { Machine, actions, interpret } from 'xstate';

import machineOptions from './machineOptions';

const gameLogic = {
  initial: 's0',
  states: {
    s0: {
      onEntry: ['logEvent', 'log'],
      on: {
        CLICK: 's1',
      },
    },
    s1: {
      onEntry: ['logEvent', 'log'],
      on: {
        CLICK: 's2',
      },
    },
    s2: {
      onEntry: ['logEvent', 'log'],
      on: {
        CLICK: 's0',
      },
    },
  },
};

const machineConfig = {
  id: 'game',
  initial: 'idle',

  context: {
    score: 0,
    time: 0,
    cards: [],
    timerInterval: 1000,
  },

  states: {
    idle: {
      onEntry: ['logEvent'],
      on: {
        NEW_GAME: 'init',
      },
    },
    init: {
      onEntry: ['logEvent', 'initCards', 'shuffleCards'],
      on: {
        '': { target: 'running' },
      },
    },
    running: {
      activities: ['ticking'],
      onEntry: ['logEvent'],
      on: {
        QUIT_GAME: 'idle',
      },
      ...gameLogic,
    },
  },
};


const gameMachine = Machine(machineConfig, machineOptions);
const gameService = interpret(gameMachine).start();

export default gameService;
