import store from '../../redux/store';
import { tick } from '../../redux/actions/timerActions';

const ticking = (context, event) => {
  const interval = setInterval(() => {
    store.dispatch(tick());
    console.log('tick...');
  }, context.timerInterval);
  return () => clearInterval(interval);
};

const activities = {
  ticking
};

export default activities;
