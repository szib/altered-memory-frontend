const ticking = (context, activity) => {
  // Start the beeping activity
  const interval = setInterval(() => {
    context.time += 1;
    console.log(`Elapsed time: ${context.time} sec`);
  }, context.timerInterval);

  // Return a function that stops the beeping activity
  return () => clearInterval(interval);
};

const activities = {
  ticking,
};

export default activities;
