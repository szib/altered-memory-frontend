// import { updateTimer } from '../../UI';

const ticking = (context) => {
  const interval = setInterval(() => {
    context.time += 1;
    // updateTimer(context.time);
  }, context.timerInterval);
  return () => clearInterval(interval);
};

const activities = {
  ticking,
};

export default activities;
