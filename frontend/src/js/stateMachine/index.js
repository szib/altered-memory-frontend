import { Machine, interpret } from 'xstate';

import machineOptions from './machineOptions';
import gameStates from './game';
import initialContext from './context';

const machineConfig = {
  id: 'game',
  initial: 'idle',

  states: {
    idle: {
      onExit: ['resetContext'],
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
      onEntry: [],
      on: {
        QUIT_GAME: 'idle',
      },
      ...gameStates,
    },
  },
};

const gameMachine = Machine(machineConfig, machineOptions, initialContext);
const gameService = interpret(gameMachine).start();
// gameService.onTransition(render)


export default gameService;
