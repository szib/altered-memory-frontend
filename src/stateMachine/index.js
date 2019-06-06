import { Machine } from 'xstate';

import machineOptions from './machineOptions';
import gameStates from './game';
import initialContext from './context';

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
      onEntry: ['initCards', 'shuffleCards'],
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
      ...gameStates,
    },
    cleanUp: {
      after: {
        2000: { target: 'idle' },
      },
    },
  },
};

const gameMachine = Machine(machineConfig, machineOptions, initialContext);

export default gameMachine;
