import gameActions from './actions';
import gameActivities from './activities';
import gameGuards from './guards';

export default {
  guards: {
    ...gameGuards,
  },

  actions: {
    ...gameActions,
  },

  activities: {
    ...gameActivities,
  },
};
