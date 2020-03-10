import produce from 'immer';

const initialState = {
  recipient: null,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipient/UPDATE_SUCCESS': {
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/DELETE_SUCCESS': {
        draft.recipient = action.payload.recipient;
        break;
      }
      default:
        return state;
    }
  });
}
