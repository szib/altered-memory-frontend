
const ticking = (context, event) => {
  const interval = setInterval(() => {
    context.time += 1;
    console.log('tick...');
  }, context.timerInterval);
  return () => clearInterval(interval);
};

const activities = {
  ticking,
};

export default activities;
