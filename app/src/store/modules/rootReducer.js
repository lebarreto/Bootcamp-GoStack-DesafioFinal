import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import orders from './orders/reducer';
import recipient from './recipient/reducer';
import deliveryman from './deliveryman/reducer';

export default combineReducers({
  auth,
  user,
  orders,
  recipient,
  deliveryman,
});
