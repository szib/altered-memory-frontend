export const TICK = 'TICK';
export const TIMER_RESET = 'TIMER_RESET';

export const tick = () => {
  return {
    type: TICK
  };
};

export const timerReset = () => {
  return {
    type: TIMER_RESET
  };
};
