import produce from 'immer';

const initialState = {
  deliveryman: null,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/DELETE_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/ADD_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      default:
        return state;
    }
  });
}
