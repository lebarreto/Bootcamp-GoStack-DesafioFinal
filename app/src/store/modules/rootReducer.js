import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import problem from './problem/reducer';

export default combineReducers({
  auth,
  user,
  problem,
});
